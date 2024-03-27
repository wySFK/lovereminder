
  document.addEventListener('DOMContentLoaded', function() {
    const previousPageBtn = document.getElementById('previousPageBtn');
    const nextPageBtn = document.getElementById('nextPageBtn');
    const poetryContainer = document.getElementById('poetryContainer');
    const imageContainer = document.querySelector('.image-container');
    const introText = "<h1 class='title'>Our Journey Together: Cherished Memories.</h1>";
    // Function to update poetry content
    function updatePoetry(content) {
      poetryContainer.innerHTML = content;
    }

    const poetryPages = [
      "<h2 class='poetry-title'></h2><p></p>",
      "<h2 class='poetry-title'> Our first Date</h2><p>February 14, 2024.</p><p>My Dearest Charlyn,</p><p>The day she accepted me to be her valentine. It was the best feeling of my life – the girl that I want agreed to be my valentine. My heart was pounding hard and very excited, asking myself if this really happened. The girl that caught my interest from the last examination of REED became my valentine, and finally, I got on a date with her. I remember the day nga gidala2 nako ang flowers tas daghan ni tan aw sakoa unya grabe support sakong fam. After ato nag taxi ko unya nagask pako sa driver kung asa ni dapita tong cookie phile HWAHAWH pati driver wala katuod asa pod dati. It took me a long time nag tuyok2 nami kung asa naabot nalang sa part nga ni baba nalang ko dapit sa NYC ni sulod pakoo didto unya pirteng inita HAHAHAH unya grabe ka singot nako ato.</p><p>I've waited nga grabe akong ginhawa, my heart kay excited with anticipation, to finally lay my eyes sayo mychaaa. And when we finally met in the dapit sa NYC, it was as if time stood still. The sight of her smile for the first time melted my heart instantaneously. She looked so stunning and breathtaking, a vision of grace and beauty. From that very moment, I felt a warmth and lovely sakoa unya sensation of pure love and adoration nga di nako ma explain through words. It felt nga dugay na tika nakaila for a lifetime, as if we were old souls reunited at last. Every glance for her was like the most beautiful masterpiece, imong pagka elegance and charming kay na captivated ko endlessly. She has a unique sense of style nga grabe akong pagka adore wholeheartedly – any outfit kay mahimong work of art, complementing nga flawlessly kaayo saimoha masking unsa mycha. I could watch upon her for pila ka oras nga walay kahumanan, for she is truly the most beautiful sight I have ever had sakong entire life.</p>",
      "<h2 class='poetry-title'></h2><p>We spend a lot of time didto sa place and help you out gamay sa studies moo. I hope nakatabang jud ako then after ato kay nag jollibee us dapit sa may victoria unya nag order kog manok with 2 rice then ikaw spag unya fries naa ta sa taas nag eat ato unya naay nagkanta2 pa ato HAHAHA. I had the best day sakong life seeing you laugh sakong mga jokes and being happy is enough na sakoa. After ato we walked padulong sa victoria unya naakay gi palit bulak para sa ate mo tong mag siga2 tapos naa sad kay gusto paliton nga papel kay di ka gusto sigeg pangayo sa mga classmates mo HAHAHA then nag lakaw2 ta padulong food hall we sat didto pila ka minutes nag talk ta unya nag take og pic unya ni hawa nata kay manarado na ang victoria.</p><p>After ato we walked padulong sa victoria unya naakay gi palit bulak para sa ate mo tong mag siga2 tapos naa sad kay gusto paliton nga papel kay di ka gusto sigeg pangayo sa mga classmates mo HAHAHA then nag lakaw2 ta padulong food hall we sat didto pila ka minutes nag talk ta unya nag  take og pic unya ni hawa nata kay manarado na ang victoria. Unya, ato kay we talked kung asa mag stambay then naka decide us nga sa park nalang tong likod sa cityhigh mao to nag walk tag pila ka oras then continue og talk about our lives nga you used to live diri nga place satong gi adtoan dapit padulong cityhigh Then gi mention nimo tong ikaw ra isa halos unya gina padalaan rakag food, After pagkabalo nako ato, grabe akong respect sayo kay despite ing ato man nahitabo saimong life wala jud ka nag plano mag binoang mycha or mag inom2 lang man kay di lalim mo puyo nga ikaw ra isa for how many months or years. Tapos, ato as we go sa park kay pirteng ngitngita na HAHHAHA.  I'm yours my dearest cha </p>",
      "<h2 class='poetry-title'>Our second Date</h2><p></p>",
      "<h2 class='poetry-title'>Our third Date</h2><p></p>",
      "<h2 class='poetry-title'>Our fourth date</h2><p></p>",
    ];

    let currentPage = 0;

    function displayPoetry(pageIndex) {
      if (pageIndex >= 0 && pageIndex < poetryPages.length) {
        const content = (pageIndex === 0) ? introText + poetryPages[pageIndex] : poetryPages[pageIndex];
        poetryContainer.innerHTML = content;
        currentPage = pageIndex;
    
        // Update the display of the Next Page button based on the current page index
        nextPageBtn.style.display = (pageIndex < poetryPages.length - 1) ? 'block' : 'none';
    
        // Show or hide the image container based on the page index
        if (pageIndex === 0) {
          imageContainer.style.display = 'block';
        } else {
          imageContainer.style.display = 'none';
        }
      }
    }
    

  // Event listener for Previous Page button
  previousPageBtn.addEventListener('click', function() {
    // Check if the current page index is 0 (the first page)
    if (currentPage === 0) {
      // Redirect to the Love Reminder page or any other desired page
      window.location.href = 'index.html'; // Update the URL with your desired page
    } else {
      // If not on the first page, navigate to the previous page normally
      const previousPageIndex = currentPage - 1;
      displayPoetry(previousPageIndex);
    }
  });
    
  

    nextPageBtn.addEventListener('click', function() {
      const nextPageIndex = currentPage + 1;
      const audio = document.getElementById('backgroundAudio')
      audio.pause(); // Pause the audio playback
      audio.currentTime = 0;
      
      if (nextPageIndex < poetryPages.length) {
        displayPoetry(nextPageIndex);
      } else {
              // Reset the poetry container and display the image container
              poetryContainer.innerHTML = introText;
              currentPage = 0;
              nextPageBtn.style.display = 'none';
              const imageContainer = document.querySelector('.image-container');
              if (imageContainer) {
                imageContainer.style.display = 'block';
              }
            }
          });
        
          // Display initial poetry content
          displayPoetry(currentPage);
        });

        
        