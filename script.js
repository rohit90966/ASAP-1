function recommendCrops(season) {
    const cropOutput = document.getElementById("crop-output");
    const guideOutput = document.getElementById("guide-output");

    // Clear existing content
    cropOutput.innerHTML = "";
    guideOutput.innerHTML = "";

    // Display crop recommendations based on the season
    if (season === 'summer') {
        cropOutput.innerHTML = `<h3>Recommended Summer Crops</h3><img src="summer-crops.jpg" alt="Summer Crops" class="crop-image"><ul>
        <li>Tomatoes</li>
        <li>Chili Peppers</li>
        <li>Corn</li>
        <li>Cucumber</li>
        </ul>`;

        guideOutput.innerHTML = `<h3>Summer Crops Growing Guide</h3><p>Start seeds indoors in early spring, transplant them after the last frost, and provide plenty of sunlight and water. Harvest in late summer.</p>`;
    } 
    else if (season === 'winter') {
        cropOutput.innerHTML = `<h3>Recommended Winter Crops</h3><img src="winter-crops.jpg" alt="Winter Crops" class="crop-image"><ul>
        <li>Spinach</li>
        <li>Carrots</li>
        <li>Kale</li>
        <li>Leeks</li>
        </ul>`;

        guideOutput.innerHTML = `<h3>Winter Crops Growing Guide</h3><p>Winter crops can tolerate cold temperatures. Plant in late fall and use row covers to protect from frost. Harvest in winter or early spring.</p>`;
    }
    else if (season === 'spring') {
        cropOutput.innerHTML = `<h3>Recommended Spring Crops</h3><img src="spring-crops.jpg" alt="Spring Crops" class="crop-image"><ul>
        <li>Peas</li>
        <li>Carrots</li>
        <li>Lettuce</li>
        <li>Radishes</li>
        </ul>`;

        guideOutput.innerHTML = `<h3>Spring Crops Growing Guide</h3><p>Plant in early spring after the soil warms up. Keep the soil moist and make sure to protect crops from late spring frosts.</p>`;
    }

    // Show the sections with animation
    cropOutput.classList.add("active");
    guideOutput.classList.add("active");
}
