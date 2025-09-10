// Temperature Probe Data Loader - Loads individual probe files
// Temperature range: -10°C to 150°C for all probe types
// Data structure: two arrays (temperatures and resistances) where index position connects them
// Data density: 1 point every 1°C for maximum interpolation accuracy

// Function to interpolate between known values with range checking
window.interpolateValue = function(temperatures, resistances, targetValue, searchByTemp = true, minTemp, maxTemp, minResistance, maxResistance) {
    // Range checking
    if (searchByTemp) {
        // Temperature to resistance conversion
        if (targetValue < minTemp || targetValue > maxTemp) {
            return {
                error: true,
                message: `Temperature out of range. Valid range: ${minTemp}°C to ${maxTemp}°C`
            };
        }
    } else {
        // Resistance to temperature conversion
        if (targetValue < minResistance || targetValue > maxResistance) {
            return {
                error: true,
                message: `Resistance out of range. Valid range: ${minResistance}Ω to ${maxResistance}Ω`
            };
        }
    }
    
    if (searchByTemp) {
        // Find resistance for given temperature
        const temp = targetValue;
        
        // Check if exact temperature exists
        const exactIndex = temperatures.indexOf(temp);
        if (exactIndex !== -1) {
            return resistances[exactIndex];
        }
        
        // Find closest temperatures for interpolation
        let lowerIndex = -1, upperIndex = -1;
        
        for (let i = 0; i < temperatures.length; i++) {
            if (temperatures[i] <= temp) {
                lowerIndex = i;
            } else if (temperatures[i] > temp && upperIndex === -1) {
                upperIndex = i;
                break;
            }
        }
        
        if (lowerIndex !== -1 && upperIndex !== -1) {
            // Interpolate between two points
            const lowerTemp = temperatures[lowerIndex];
            const upperTemp = temperatures[upperIndex];
            const lowerRes = resistances[lowerIndex];
            const upperRes = resistances[upperIndex];
            
            const ratio = (temp - lowerTemp) / (upperTemp - lowerTemp);
            return lowerRes + ratio * (upperRes - lowerRes);
        }
        
        // Return closest value if interpolation not possible
        if (lowerIndex !== -1) {
            return resistances[lowerIndex];
        } else if (upperIndex !== -1) {
            return resistances[upperIndex];
        }
        
        return null;
    } else {
        // Find temperature for given resistance
        const resistance = targetValue;
        
        // Check if exact resistance exists
        const exactIndex = resistances.indexOf(resistance);
        if (exactIndex !== -1) {
            return temperatures[exactIndex];
        }
        
        // Find closest resistance values for interpolation
        // For NTC thermistors, resistance values are in descending order
        let lowerIndex = -1, upperIndex = -1;
        
        // Search for the resistance value in the descending array
        for (let i = 0; i < resistances.length; i++) {
            if (resistance >= resistances[i]) {
                // Found the upper bound (lower resistance value)
                upperIndex = i;
                if (i > 0) {
                    lowerIndex = i - 1;
                }
                break;
            }
        }
        
        // If we didn't find an upper bound, use the last entry (lowest resistance)
        if (upperIndex === -1 && resistances.length > 0) {
            upperIndex = resistances.length - 1;
            lowerIndex = resistances.length - 2;
        }
        
        // If we didn't find a lower bound, use the first entry (highest resistance)
        if (lowerIndex === -1 && resistances.length > 0) {
            lowerIndex = 0;
            upperIndex = 1;
        }
        
        // If we have both bounds, interpolate
        if (lowerIndex !== -1 && upperIndex !== -1 && resistances[lowerIndex] !== resistances[upperIndex]) {
            const lowerRes = resistances[lowerIndex];
            const upperRes = resistances[upperIndex];
            const lowerTemp = temperatures[lowerIndex];
            const upperTemp = temperatures[upperIndex];
            
            const ratio = (resistance - lowerRes) / (upperRes - lowerRes);
            return lowerTemp + ratio * (upperTemp - lowerTemp);
        }
        
        // If we only have one bound, return that temperature
        if (lowerIndex !== -1) {
            return temperatures[lowerIndex];
        } else if (upperIndex !== -1) {
            return temperatures[upperIndex];
        }
        
        return null;
    }
};

// Function to get probe data and limits based on probe type
window.getProbeData = function(probeType) {
    switch(probeType) {
        case 'ntc3k3':
            return {
                temperatures: window.NTC3K3_TEMPERATURES,
                resistances: window.NTC3K3_RESISTANCES,
                minTemp: window.NTC3K3_MIN_TEMP,
                maxTemp: window.NTC3K3_MAX_TEMP,
                minResistance: window.NTC3K3_MIN_RESISTANCE,
                maxResistance: window.NTC3K3_MAX_RESISTANCE
            };
        case 'pt1000':
            return {
                temperatures: window.PT1000_TEMPERATURES,
                resistances: window.PT1000_RESISTANCES,
                minTemp: window.PT1000_MIN_TEMP,
                maxTemp: window.PT1000_MAX_TEMP,
                minResistance: window.PT1000_MIN_RESISTANCE,
                maxResistance: window.PT1000_MAX_RESISTANCE
            };
        default:
            return null;
    }
};

// Add a test function for debugging
window.testTempProbeData = function() {
    console.log('Testing temperature probe data...');
    
    // Test each probe type
    const probeTypes = ['ntc3k3', 'pt1000'];
    
    for (const probeType of probeTypes) {
        const probeData = window.getProbeData(probeType);
        if (probeData) {
            console.log(`${probeType.toUpperCase()} - Temperature range: ${probeData.minTemp}°C to ${probeData.maxTemp}°C`);
            console.log(`${probeType.toUpperCase()} - Resistance range: ${probeData.minResistance}Ω to ${probeData.maxResistance}Ω`);
            
            // Test temperature to resistance
            const testTemp = 25;
            const testResistance = window.interpolateValue(probeData.temperatures, probeData.resistances, testTemp, true, probeData.minTemp, probeData.maxTemp, probeData.minResistance, probeData.maxResistance);
            console.log(`${probeType.toUpperCase()} at ${testTemp}°C: ${testResistance}Ω`);
        }
    }
    
    return 'Test completed - check console for results';
};

// Helper function to convert arrays to object format for debugging
window.getProbeDataAsObject = function(probeType) {
    const probeData = window.getProbeData(probeType);
    if (!probeData) return null;
    
    const result = {};
    for (let i = 0; i < probeData.temperatures.length; i++) {
        result[probeData.temperatures[i]] = probeData.resistances[i];
    }
    return result;
};

console.log('Temperature probe data loader initialized successfully'); 