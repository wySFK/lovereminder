document.addEventListener('DOMContentLoaded', function() {
    const poetryElement = document.getElementById('poetry');
    const morningBtn = document.getElementById('morningBtn');
    const afternoonBtn = document.getElementById('afternoonBtn');
    const eveningBtn = document.getElementById('eveningBtn');``
    const kissUImage = document.getElementById('kissU');
    const loveImage = document.getElementById('loveU');
    const cuteImage = document.getElementById('cuteU');
    const currentTime = new Date().getHours(); // Local time
  
    function updatePoetry(poetryText) {
      poetryElement.textContent = poetryText;
    }
  
    function loadPoetry(timeOfDay) {
      let poetryText = '';
      if (timeOfDay === 'morning') {
        const morningPoetry = [
          "With the morning sun, my love for you shines brighter than ever.",
          "The dawn breaks, painting the sky with hues of our shared dreams.",
          "In the morning's gentle embrace, Your presence, my heart's solace and grace",
          "As dawn's light paints the sky anew, My love for you, forever true.",
          "With each sunrise, my thoughts of you,Like morning dew, pure and true.",
          "In the quiet of the morning's start,You're the beat within my heart.",
          "Like the morning breeze, your love refreshes my soul.",
          "Your smile in the morning light is my daily dose of happiness.",
          "In the morning's first light, I see your beauty anew.",
          "As the day begins, my love for you grows stronger.",
          // Add more morning poetry here
        ];
        poetryText = morningPoetry[Math.floor(Math.random() * morningPoetry.length)];
        kissUImage.style.display = 'block'; // Show morning image
        loveImage.style.display = 'none'; // Hide afternoon and evening images
        cuteImage.style.display ='none' // hide evening images
      } else if (timeOfDay === 'afternoon') {
        const afternoonPoetry = [
          "In the gentle embrace of the afternoon's glow, I find solace in your love.",
          "With each passing hour, my thoughts drift to you like petals on the wind.",
          "The sun-kissed moments with you are the sweetest melodies in my day.",
          "In the afternoon's gentle glow, My thoughts of you, a soft echo.",
          "As the sun climbs high, my love for you reaches the sky.",
          "In the warmth of the afternoon's embrace, Your love's touch, my saving grace.",
          "With each passing hour, my love for you blooms like a flower.",
          "In the calm of the afternoon's reprieve, Your love's whisper, I believe.",
          "Like the afternoon sun, your love's warmth fills my day.",
          "As the shadows lengthen, my love for you deepens.",
          "In the afternoon's tranquility, Your love's melody, my serenity.",
          "With each passing afternoon's delight, My love for you, an endless flight.",
          "Like the afternoon breeze, your love's gentle caress puts my mind at ease.",


          // Add more afternoon poetry here
        ];
        poetryText = afternoonPoetry[Math.floor(Math.random() * afternoonPoetry.length)];
        loveImage.style.display = 'block'; // Show afternoon image
        kissUImage.style.display = 'none'; // Hide morning and evening images
        cuteImage.style.display = 'none';
      } else if (timeOfDay === 'evening') {
        const eveningPoetry = [
          "As the evening unfolds its beauty, my heart dances to the rhythm of your love.",
          "The stars above whisper secrets of our timeless love story, where my love for you shines in its glory.",
          "In the quiet of the night, I hear your laughter echoing in my soul.",
          "As evening descends, my love for you ascends.",
          "In the twilight's embrace, Your love's glow, my sacred space.",
          "With each star that shines, My love for you, forever entwined.",
          "In the hush of the evening's lull, My love for you, a warmth I feel.",
          "Like the evening sky, my love for you is vast and undeniable",
          "As the night whispers, my love for you glistens.",
          "In the stillness of the night, My guiding light is your love's presence.",
          "With each night's starry gaze, My love for you, it amazes.",
          "In the twilight's embrace, My sacred space is your love's glow.",
          "In the quiet of the evening's peace, My heart's pull is your love's embrace.",
          // Add more evening poetry here
        ];
        poetryText = eveningPoetry[Math.floor(Math.random() * eveningPoetry.length)];
        cuteImage.style.display = 'block'; // Show evening image
        kissUImage.style.display = 'none'; // Hide morning and afternoon images
        loveImage.style.display = 'none';
      }
      updatePoetry(poetryText);
    }
  
    // Disable all buttons by default
    morningBtn.disabled = true;
    afternoonBtn.disabled = true;
    eveningBtn.disabled = true;
  
    // Define time intervals for unlocking buttons in local time
    const morningStart = 6; // 6 AM local time
    const morningEnd = 12; // 12 PM local time
    const afternoonStart = 12; // 12 PM local time
    const afternoonEnd = 18; // 6 PM local time
    const eveningStart = 18; // 6 PM local time
  
    if (currentTime >= morningStart && currentTime < morningEnd) {
      // Enable morning button
      morningBtn.disabled = false;
      loadPoetry('morning');
    } else if (currentTime >= afternoonStart && currentTime < afternoonEnd) {
      // Enable afternoon button
      afternoonBtn.disabled = false;
      loadPoetry('afternoon');
    } else if (currentTime >= eveningStart) {
      // Enable evening button
      eveningBtn.disabled = false;
      loadPoetry('evening');
    }
  
    morningBtn.addEventListener('click', function() {
      loadPoetry('morning'); // Reload morning poetry
    });
  
    afternoonBtn.addEventListener('click', function() {
      loadPoetry('afternoon'); // Reload afternoon poetry
    });
  
    eveningBtn.addEventListener('click', function() {
      loadPoetry('evening'); // Reload evening poetry



      
    });
    
  });
  