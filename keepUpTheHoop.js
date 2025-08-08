/**
 * Keep up the Hoop Challenge
 * 
 * Alex just got a new hula hoop and loves it, but feels discouraged because 
 * his little brother is better than him. This function provides encouraging 
 * messages based on how many times Alex can keep the hoop spinning.
 * 
 * @param {number} n - Number of times the hoop goes around
 * @returns {string} - Encouraging message based on performance
 */
function hoopCount(n) {
    // Check if Alex achieved the milestone of 10 or more hoops
    if (n >= 10) {
        // Alex did great! Time to learn some tricks
        return "Great, now move on to tricks";
    } else {
        // Alex needs more practice, but don't give up!
        return "Keep at it until you get it";
    }
}

// Test cases to verify the function works correctly
console.log(hoopCount(3));  // Expected: "Keep at it until you get it"
console.log(hoopCount(11)); // Expected: "Great, now move on to tricks"  
console.log(hoopCount(0));  // Expected: "Keep at it until you get it"

/**
 * Logic explanation:
 * - If n >= 10: Alex has mastered the basics and can try advanced moves
 * - If n < 10: Alex should keep practicing the fundamentals
 * - The threshold of 10 hoops represents the minimum for basic proficiency
 */
