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
          "In the dawn's gentle embrace, my love for you, a sacred space. Each sunrise, a testament anew, my heart beats only for you.",
          "As morning's first light fills the sky, my love for you, an endless high. With each breath of morning air, my love for you, beyond compare.",
          "In the freshness of the morning dew, my love for you, pure and true. Each flower blooms with your grace, my love for you, a timeless embrace.",
          "As the birds sing their morning song, my love for you, forever strong. With each note, my heart's melody, my love for you, a sweet symphony.",
          "In the quietude of the morning's calm, my love for you, a soothing balm. With every ray of the morning sun, my love for you, forever begun.",
          "As morning's golden hues paint the sky, my love for you, a love that will never die. Each moment with you, a treasure untold, my love for you, a story so bold.",
          "In the whispers of the morning breeze, my love for you, a gentle tease. Each sigh, a love so deep, my love for you, secrets to keep.",
          "As morning awakens the world anew, my love for you, like morning dew. Each drop, a reflection of my devotion, my love for you, a heartfelt emotion.",
          "In the silence of the morning's peace, my love for you, a sweet release. Each day, a promise to love you more, my love for you, forever and evermore.",
          "As the world stirs with morning's grace, my love for you, a timeless embrace. With each sunrise, my heart's delight, my love for you, a love so right.",
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
          "In the quiet of the afternoon, my love for you grows stronger, like the gentle breeze that whispers your name.",
          "With every passing moment, I find myself longing for your presence, as the afternoon sun paints the sky with hues of love.",
          "In the stillness of this afternoon's calm, my love for you is like a soothing balm. With every breath, my heart whispers your name, for you, my love, are my eternal flame.",
          "As the afternoon sun casts its golden glow, my love for you, like a river, continues to flow. Each moment with you, a treasure so rare, my love for you, beyond compare.",
          "In the quiet of this afternoon's tranquility, my love for you fills every possibility. With each passing hour, my devotion grows true, for my heart beats only for you.",
          "As the shadows lengthen in the afternoon's embrace, my love for you, a steadfast grace. Your presence, a beacon in the day's gentle light, my love for you, an undying delight.",
          "In the soft whispers of the afternoon breeze, my love for you, a symphony of ease. With every touch, my soul finds peace, for in your love, all worries cease.",
          "As the afternoon sun begins its descent, my love for you, a testament. With each ray of light that fades away, my love for you, forever to stay.",
          "In the warmth of this afternoon's embrace, my love for you, an endless space. With every smile, my world comes alive, for in your love, I thrive.",
          "As the afternoon sky turns into shades of gold, my love for you, a story untold. With each moment shared, my heart overflows, for my love for you, only grows.",
          "In the silence of this afternoon's serenity, my love for you, a sweet melody. With every heartbeat, my soul sings, for in your love, true happiness rings.",
          "As the afternoon fades into evening's embrace, my love for you, a timeless grace. With every thought, my love for you shines through, for in your love, I find my truth.",



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
          "In the quiet of the evening's glow, My thoughts of you, like rivers, flow. Each star that twinkles in the night,Reflects the love that shines so bright.",
          "As dusk paints the sky in hues of gold, My love for you, a tale untold. In twilight's embrace, my heart sings, for you, my love, are life's sweetest things.",
          "When daylight fades and shadows grow long, it's your love that makes my heart strong. Like a candle in the dark, you light my way, my love for you, forever and a day.",
          "The evening breeze whispers your name, and my heart ignites with love's flame. In the silence of the night, I confess, you're the one who brings me happiness.",
          "As the moon rises in the sky above, my love for you, an eternal love. With each passing moment, my devotion grows, in your arms, my heart forever knows.",
          "Like the evening sky, your love's vastness, I cannot deny, in every darkness. With stars as witnesses to our love's tale, forever with you, I shall set sail.",
          "In the twilight hours, my thoughts are of you, the love we share, forever true. With each breath I take, I feel alive, knowing you're with me, side by side.",
          "As evening descends and stars appear, my love for you, crystal clear. Like a melody that plays in my heart, with you, my cha, I'll never part.",
          "In the stillness of the night, I find peace, wrapped in your love, all worries cease. With every star that shines above, I'm reminded of our endless love.",
          "As the day bids farewell and night takes hold, my love for you, a story untold. In the quiet moments of evening's embrace, I find solace in your love and grace.",
          "In the tranquil embrace of evening's glow, my love for you, like rivers, endlessly flow. Each star that adorns the night sky above reflects the depth of my endless love.",
          "As evening's whispers softly caress, my heart's melody, your love's finesse. In the quietude of twilight's serene, my love for you, a flame evergreen.",
          "In the hush of evening's gentle breeze, my love for you, an ocean with ease. Each sigh of the night, a love song so true, my heart beats for you, only for you.",
          "As shadows lengthen in evening's embrace, my love for you, a timeless grace. With every star that graces the night, my love for you, an eternal light.",
          "In the stillness of evening's calm repose, my love for you, a river that flows. Each moment with you, a cherished delight, my love for you, a beacon of light.",
          "As evening paints the canvas of the sky, my love for you, an endless high. With every hue, my heart's colors blend, my love for you, a journey without end.",
          "In the twilight's enchanting allure, my love for you, forever pure. With each star that twinkles above, my love for you, an unbreakable love.",
          "As evening's symphony plays its tune, my love for you, a melody in bloom. With each note, my heart's song sings, my love for you, eternal springs.",
          "In the silence of evening's gentle breeze, my love for you, a whispering ease. Each breath I take, your name I sigh, my love for you, never shall die.",
          "As evening's curtain falls with grace, my love for you, a timeless embrace. With each moment, my heart's vow, my love for you, forever and now.",
       
       
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
  