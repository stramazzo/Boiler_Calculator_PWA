// Temperature Probe Data - Resistance values for different probe types
// Temperature range: 0°C to 200°C

const TEMP_PROBE_DATA = {
    // NTC 3.3k ohm at 25°C (using Steinhart-Hart equation approximation)
    'ntc3k3': {
        0: 10470,    // 0°C
        5: 8317,     // 5°C
        10: 6653,    // 10°C
        15: 5361,    // 15°C
        20: 4350,    // 20°C
        25: 3300,    // 25°C (nominal)
        30: 2668,    // 30°C
        35: 2174,    // 35°C
        40: 1782,    // 40°C
        45: 1468,    // 45°C
        50: 1214,    // 50°C
        55: 1010,    // 55°C
        60: 844,     // 60°C
        65: 708,     // 65°C
        70: 597,     // 70°C
        75: 505,     // 75°C
        80: 429,     // 80°C
        85: 366,     // 85°C
        90: 314,     // 90°C
        95: 270,     // 95°C
        100: 233,    // 100°C
        105: 202,    // 105°C
        110: 176,    // 110°C
        115: 154,    // 115°C
        120: 135,    // 120°C
        125: 119,    // 125°C
        130: 105,    // 130°C
        135: 93,     // 135°C
        140: 83,     // 140°C
        145: 74,     // 145°C
        150: 66,     // 150°C
        155: 59,     // 155°C
        160: 53,     // 160°C
        165: 48,     // 165°C
        170: 43,     // 170°C
        175: 39,     // 175°C
        180: 35,     // 180°C
        185: 32,     // 185°C
        190: 29,     // 190°C
        195: 26,     // 195°C
        200: 24      // 200°C
    },

    // NTC 47k ohm at 25°C
    'ntc47k': {
        0: 149300,   // 0°C
        5: 118600,   // 5°C
        10: 94850,   // 10°C
        15: 76520,   // 15°C
        20: 62050,   // 20°C
        25: 47000,   // 25°C (nominal)
        30: 38060,   // 30°C
        35: 31010,   // 35°C
        40: 25410,   // 40°C
        45: 20940,   // 45°C
        50: 17330,   // 50°C
        55: 14410,   // 55°C
        60: 12040,   // 60°C
        65: 10110,   // 65°C
        70: 8520,    // 70°C
        75: 7210,    // 75°C
        80: 6120,    // 80°C
        85: 5220,    // 85°C
        90: 4470,    // 90°C
        95: 3840,    // 95°C
        100: 3320,   // 100°C
        105: 2880,   // 105°C
        110: 2510,   // 110°C
        115: 2190,   // 115°C
        120: 1920,   // 120°C
        125: 1690,   // 125°C
        130: 1490,   // 130°C
        135: 1320,   // 135°C
        140: 1170,   // 140°C
        145: 1040,   // 145°C
        150: 930,    // 150°C
        155: 830,    // 155°C
        160: 745,    // 160°C
        165: 670,    // 165°C
        170: 605,    // 170°C
        175: 545,    // 175°C
        180: 495,    // 180°C
        185: 450,    // 185°C
        190: 410,    // 190°C
        195: 375,    // 195°C
        200: 340     // 200°C
    },

    // PT1000 (Platinum RTD, 1000 ohm at 0°C)
    'pt1000': {
        0: 1000.0,   // 0°C (nominal)
        5: 1019.5,   // 5°C
        10: 1039.0,  // 10°C
        15: 1058.5,  // 15°C
        20: 1078.0,  // 20°C
        25: 1097.5,  // 25°C
        30: 1117.0,  // 30°C
        35: 1136.5,  // 35°C
        40: 1156.0,  // 40°C
        45: 1175.5,  // 45°C
        50: 1195.0,  // 50°C
        55: 1214.5,  // 55°C
        60: 1234.0,  // 60°C
        65: 1253.5,  // 65°C
        70: 1273.0,  // 70°C
        75: 1292.5,  // 75°C
        80: 1312.0,  // 80°C
        85: 1331.5,  // 85°C
        90: 1351.0,  // 90°C
        95: 1370.5,  // 95°C
        100: 1390.0, // 100°C
        105: 1409.5, // 105°C
        110: 1429.0, // 110°C
        115: 1448.5, // 115°C
        120: 1468.0, // 120°C
        125: 1487.5, // 125°C
        130: 1507.0, // 130°C
        135: 1526.5, // 135°C
        140: 1546.0, // 140°C
        145: 1565.5, // 145°C
        150: 1585.0, // 150°C
        155: 1604.5, // 155°C
        160: 1624.0, // 160°C
        165: 1643.5, // 165°C
        170: 1663.0, // 170°C
        175: 1682.5, // 175°C
        180: 1702.0, // 180°C
        185: 1721.5, // 185°C
        190: 1741.0, // 190°C
        195: 1760.5, // 195°C
        200: 1780.0  // 200°C
    },

    // PT100 (Platinum RTD, 100 ohm at 0°C)
    'pt100': {
        0: 100.00,   // 0°C (nominal)
        5: 101.95,   // 5°C
        10: 103.90,  // 10°C
        15: 105.85,  // 15°C
        20: 107.80,  // 20°C
        25: 109.75,  // 25°C
        30: 111.70,  // 30°C
        35: 113.65,  // 35°C
        40: 115.60,  // 40°C
        45: 117.55,  // 45°C
        50: 119.50,  // 50°C
        55: 121.45,  // 55°C
        60: 123.40,  // 60°C
        65: 125.35,  // 65°C
        70: 127.30,  // 70°C
        75: 129.25,  // 75°C
        80: 131.20,  // 80°C
        85: 133.15,  // 85°C
        90: 135.10,  // 90°C
        95: 137.05,  // 95°C
        100: 139.00, // 100°C
        105: 140.95, // 105°C
        110: 142.90, // 110°C
        115: 144.85, // 115°C
        120: 146.80, // 120°C
        125: 148.75, // 125°C
        130: 150.70, // 130°C
        135: 152.65, // 135°C
        140: 154.60, // 140°C
        145: 156.55, // 145°C
        150: 158.50, // 150°C
        155: 160.45, // 155°C
        160: 162.40, // 160°C
        165: 164.35, // 165°C
        170: 166.30, // 170°C
        175: 168.25, // 175°C
        180: 170.20, // 180°C
        185: 172.15, // 185°C
        190: 174.10, // 190°C
        195: 176.05, // 195°C
        200: 178.00  // 200°C
    }
};

// Function to interpolate between known values
function interpolateValue(data, targetValue, searchByTemp = true) {
    const entries = Object.entries(data).map(([key, value]) => [parseFloat(key), value]);
    entries.sort((a, b) => a[0] - b[0]);
    
    if (searchByTemp) {
        // Find temperature for given resistance
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
        
        // Find closest resistances for interpolation
        let lower = null, upper = null;
        for (const [temp, res] of entries) {
            if (res >= resistance) {
                if (lower === null || res < lower[1]) {
                    upper = lower;
                    lower = [temp, res];
                } else if (upper === null || res < upper[1]) {
                    upper = [temp, res];
                }
            } else {
                if (upper === null || res > upper[1]) {
                    lower = upper;
                    upper = [temp, res];
                } else if (lower === null || res > lower[1]) {
                    lower = [temp, res];
                }
            }
        }
        
        // For NTC thermistors, resistance decreases with temperature
        // For PT sensors, resistance increases with temperature
        const isNTC = Object.keys(data)[0] !== undefined && data[0] > data[25];
        
        if (isNTC) {
            // Swap if needed for NTC
            if (lower && upper && lower[1] < upper[1]) {
                [lower, upper] = [upper, lower];
            }
        }
        
        if (lower && upper && lower[1] !== upper[1]) {
            const ratio = (resistance - upper[1]) / (lower[1] - upper[1]);
            return upper[0] + ratio * (lower[0] - upper[0]);
        }
        
        return lower ? lower[0] : (upper ? upper[0] : null);
    }
}

// Export for use in the calculator
if (typeof window !== 'undefined') {
    window.TEMP_PROBE_DATA = TEMP_PROBE_DATA;
    window.interpolateValue = interpolateValue;
}