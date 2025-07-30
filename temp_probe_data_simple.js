// Simplified Temperature Probe Data for testing
console.log('Loading simplified temperature probe data...');

// Create a simple test object
window.TEMP_PROBE_DATA = {
    // NTC 3.3k ohm at 25°C (small subset for testing)
    'ntc3k3': {
        0: 10100,
        25: 6070,
        50: 4520,
        100: 3320
    },

    // NTC 47k ohm at 25°C (small subset for testing)
    'ntc47k': {
        0: 143000,
        25: 115500,
        50: 213000,
        100: 783000
    },

    // PT1000 (small subset for testing)
    'pt1000': {
        0: 1000.0,
        25: 1096.25,
        50: 1192.5,
        100: 1385.0
    },

    // PT100 (small subset for testing)
    'pt100': {
        0: 100.0,
        25: 109.625,
        50: 119.25,
        100: 138.5
    }
};

// Function to interpolate between known values
window.interpolateValue = function(data, targetValue, searchByTemp = true) {
    const entries = Object.entries(data).map(([key, value]) => [parseFloat(key), value]);
    entries.sort((a, b) => a[0] - b[0]);
    
    if (searchByTemp) {
        // Find resistance for given temperature
        const temp = targetValue;
        if (data[temp] !== undefined) {
            return data[temp];
        }
        
        // Find closest temperatures for interpolation
        let lower = null, upper = null;
        for (const [tempKey, resistance] of entries) {
            if (tempKey <= temp) {
                lower = [tempKey, resistance];
            } else if (tempKey > temp && upper === null) {
                upper = [tempKey, resistance];
                break;
            }
        }
        
        if (lower && upper) {
            const ratio = (temp - lower[0]) / (upper[0] - lower[0]);
            return lower[1] + ratio * (upper[1] - lower[1]);
        }
        
        return lower ? lower[1] : (upper ? upper[1] : null);
    } else {
        // Find temperature for given resistance
        const resistance = targetValue;
        
        // Find the two closest resistance values for interpolation
        let lower = null, upper = null;
        
        // Sort entries by resistance value
        const sortedEntries = entries.sort((a, b) => a[1] - b[1]);
        
        // Find the closest resistance values
        for (let i = 0; i < sortedEntries.length; i++) {
            const [temp, res] = sortedEntries[i];
            
            if (res <= resistance) {
                lower = [temp, res];
            } else {
                upper = [temp, res];
                break;
            }
        }
        
        // If we didn't find an upper bound, use the last entry
        if (!upper && sortedEntries.length > 0) {
            upper = sortedEntries[sortedEntries.length - 1];
        }
        
        // If we didn't find a lower bound, use the first entry
        if (!lower && sortedEntries.length > 0) {
            lower = sortedEntries[0];
        }
        
        // If we have both bounds, interpolate
        if (lower && upper && lower[1] !== upper[1]) {
            const ratio = (resistance - lower[1]) / (upper[1] - lower[1]);
            return lower[0] + ratio * (upper[0] - lower[0]);
        }
        
        // If we only have one bound, return that temperature
        return lower ? lower[0] : (upper ? upper[0] : null);
    }
};

// Add a test function for debugging
window.testTempProbeData = function() {
    console.log('Testing simplified temperature probe data...');
    console.log('Available probe types:', Object.keys(window.TEMP_PROBE_DATA));
    
    // Test temperature to resistance
    const testTemp = 25;
    const testResistance = window.interpolateValue(window.TEMP_PROBE_DATA.ntc3k3, testTemp, true);
    console.log(`NTC 3.3k at ${testTemp}°C: ${testResistance}Ω`);
    
    // Test resistance to temperature
    const testRes = 6070; // Should be around 25°C for NTC 3.3k
    const testTempResult = window.interpolateValue(window.TEMP_PROBE_DATA.ntc3k3, testRes, false);
    console.log(`NTC 3.3k with ${testRes}Ω: ${testTempResult}°C`);
    
    return 'Test completed - check console for results';
};

console.log('Simplified temperature probe data loaded successfully');
console.log('window.TEMP_PROBE_DATA:', window.TEMP_PROBE_DATA);
console.log('window.interpolateValue:', window.interpolateValue); 