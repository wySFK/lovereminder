
  document.addEventListener('DOMContentLoaded', function() {
    const previousPageBtn = document.getElementById('previousPageBtn');
    const nextPageBtn = document.getElementById('nextPageBtn');
    const poetryContainer = document.getElementById('poetryContainer');
    const imageContainer = document.querySelector('.image-container');
    const introText = "<h1 class='title'>Our Journey Together</h1>";
    // Function to update poetry content
    function updatePoetry(content) {
      poetryContainer.innerHTML = content;
    }

    const poetryPages = [ 
      "<h2 class='poetry-title'></h2><p></p>",
      "<h2 class='poetry-title'> Our first Date</h2><p>February 14, 2024.</p><p>My Dearest Charlyn,</p><p>The day she accepted me to be her valentine. It was the best feeling of my life – the girl that I want agreed to be my valentine. My heart was pounding hard and very excited, asking myself if this really happened. The girl that caught my interest from the last examination of REED became my valentine, and finally, I got on a date with her. I remember the day nga gidala2 nako ang flowers tas daghan ni tan aw sakoa unya grabe support sakong fam. After ato nag taxi ko unya nagask pako sa driver kung asa ni dapita tong cookie phile HWAHAWH pati driver wala katuod asa pod dati. It took me a long time nag tuyok2 nami kung asa naabot nalang sa part nga ni baba nalang ko dapit sa NYC ni sulod pakoo didto unya pirteng inita HAHAHAH unya grabe ka singot nako ato.</p><p>I've waited nga grabe akong ginhawa, my heart kay excited with anticipation, to finally lay my eyes sayo mychaaa. And when we finally met in the dapit sa NYC, it was as if time stood still. The sight of her smile for the first time melted my heart instantaneously. She looked so stunning and breathtaking, a vision of grace and beauty. From that very moment, I felt a warmth and lovely sakoa unya sensation of pure love and adoration nga di nako ma explain through words. It felt nga dugay na tika nakaila for a lifetime, as if we were old souls reunited at last. Every glance for her was like the most beautiful masterpiece, imong pagka elegance and charming kay na captivated ko endlessly. She has a unique sense of style nga grabe akong pagka adore wholeheartedly – any outfit kay mahimong work of art, complementing nga flawlessly kaayo saimoha masking unsa mycha. I could watch upon her for pila ka oras nga walay kahumanan, for she is truly the most beautiful sight I have ever had sakong entire life.</p>",
      "<h2 class='poetry-title'></h2><p>We spend a lot of time didto sa place and help you out gamay sa studies moo. I hope nakatabang jud ako then after ato kay nag jollibee us dapit sa may victoria unya nag order kog manok with 2 rice then ikaw spag unya fries naa ta sa taas nag eat ato unya naay nagkanta2 pa ato HAHAHA. I had the best day sakong life seeing you laugh sakong mga jokes and being happy is enough na sakoa. After ato we walked padulong sa victoria unya naakay gi palit bulak para sa ate mo tong mag siga2 tapos naa sad kay gusto paliton nga papel kay di ka gusto sigeg pangayo sa mga classmates mo HAHAHA then nag lakaw2 ta padulong food hall we sat didto pila ka minutes nag talk ta unya nag take og pic unya ni hawa nata kay manarado na ang victoria.</p><p>After ato we walked padulong sa victoria unya naakay gi palit bulak para sa ate mo tong mag siga2 tapos naa sad kay gusto paliton nga papel kay di ka gusto sigeg pangayo sa mga classmates mo HAHAHA then nag lakaw2 ta padulong food hall we sat didto pila ka minutes nag talk ta unya nag  take og pic unya ni hawa nata kay manarado na ang victoria. Unya, ato kay we talked kung asa mag stambay then naka decide us nga sa park nalang tong likod sa cityhigh mao to nag walk tag pila ka oras then continue og talk about our lives nga you used to live diri nga place satong gi adtoan dapit padulong cityhigh Then gi mention nimo tong ikaw ra isa halos unya gina padalaan rakag food, After pagkabalo nako ato, grabe akong respect sayo kay despite ing ato man nahitabo saimong life wala jud ka nag plano mag binoang mycha or mag inom2 lang man kay di lalim mo puyo nga ikaw ra isa for how many months or years. Tapos, ato as we go sa park kay pirteng ngitngita na HAHHAHA.  I'm yours my dearest cha </p>",
      "<h2 class='poetry-title'>Our second Date</h2><p>February 20,2024.</p><p>I couldn't believe that akong crush, who is now the woman nga I admire the most, agreed na makig second date sakoa. Grabe akong na feel ato like thrilling og heartwarming. I remember our first date clearly, it felt like dugay na us nagkaila, as if nga we are connected in past lives or something similar. We had an incredible time together ato, like laughing and enjoying each other's company nga naabot nalang sa point nakalimot na us sa oras og dugay nakauli. I planned for us satong second date nga mag unlmited wings ta near St.Guzman, nga place tawag kay Wishbone. nag lakaw ra us ato and grabe ka init ato nga adlawa tas hapon yun. I remember nga ako ra nag order atong unli wings tapos ikaw love nag order og beef steak. Tapos nag imperssions pako ato like nina Tito Boy, spongebob og squidward just trying to make laugh. Tapos nag joke pakong complained nga small seats kaayo tas nag suggest dapat tapad us nag eat ato nga time. After, ato nag storyahanay ta about satong courses or like upcoming projects, research og thesis then nag storya2 pata tong unsa gwapo buhaton nga project para ma gamit samong capstone etc. After, paghuman natog eat katugon kaayo ko ato sobra ka busog love then we talked about our plans og aspirations sa life, then nag decide us nga mag adto sa Abreeza Mall para mag milk tea didto dapit sa food court. At the mall ato, nga time nag take us pictures of us share tag stories abotu our selves og our interests. I felt so grateful that we were spending that time together. Later ato sa gabie, we walked pauwi para manguli na us while ga hold tag hands, it was a memorable and good day for me just being with you love. Eventually, nag taxi us pauwi, and chershing every moment we had togehter. This memory of us love satong second date is always something I will always treasure.</p>",
      "<h2 class='poetry-title'>Our third Date</h2><p>February 21, 2024.</p><p>I cherish every moment from our first date  hantod sa latest. We decided nga mag dinner nalang sa abreeza after a day of school. Your presences alone, my love kay makes my heart skip a everytime. Your smile, your scent, the way you speak- everything about sayo love brings me joy and ma melt mga stress ko and worries. Just being with you love makes my day brighter. I remember those times nga gikapoy ka galing school tas nag talk mo about sa law ata yun basta nag dala ka libro sad ato, yet nag decide gihapon ka mag eat sakoa. We ended up nag kaon sa Mang Inasal sa taas, nag chikahanay ta tapos nag joke paka nga hugaw man siguro stick nila diria etc HAHAHAH. Tapos wala pa sinay drinks ato the worst nag palit nalag us og lemon nila and ganahan jud ako love gina hungitan mo ko ba grabe kilig nako inside pero ginatago ra nako gotta act cool lovee HAHAHAHAAH. After natog eat love, we enjoyed atong milk tea dapit sa food hall, sharing stories og dreams. Around 8-9pm, nanguli nato ato love, tired but content, naapatong escalator nila na makalipong kaayo tas nag joke2 pata nga mo latay2 kunohay HHHAHA. That moment, being with you love completed my day. I realized you are the woman I've prayed for, and I made a vow to love you more each day and care for you always. I still cherish those hug nato,  holding hands, trapohan atong each other's singot, and katong pictures we took together. Your happiness means everything sakoa, love, and I would do anything to keep that smile on your face, to make you feel nga cherished and loved, always.  </p>",
      "<h2 class='poetry-title'>Our fourth date</h2><p>t was the day nga we decided mangaon sa Greenwich in Abreeza. Grabe craving mo ato love sa lasagna, and medyo daghan2 sad tao ato love unya dugay pajud kaayo ang pagkaon nila ba unya dili ra diay init kaayo ang food tas naapay coke nga tubig ray malasahan HAHAHHA,  I remember asking you about your day ato nga time love og hearing about sainyong gi klasehan tas mga moments nimo with nadine og laurene. Then, unexpectedly, naay ni approached satoa nga ga baligya og  ballpens para daw saiyang pambayad sa tuition. Imong gi pili kay the black one, and the seller kay nagpasalamat tapos ni ingon pinakalit nga stay strong. Grabe akong kilig ato deep inside love tapos gina tago nako akong smile, tapos di ko sure if naka malay ka or namula man ko AHAHAHA. Tapos, reaction nimo kay weh, weh ra love ato nga time HAHAHAHA. So, after atong nangaon ta love nag decide us nga mag milk tea dapit sa food court and gi continue nato atong conversation about our future plans after mag graduate. I opened up about sa mga emotional struggles, tapos gi comforted mo ako to love tas nag advice paka. I was really grateful sa support mo love, although aware na ako sa mga ing atong gi pang advice mo pero, still it means alot coming sayo love the girl that i love. Tapos, manguli nata ato love we hugged, and gi kiss nako forehead mo og cheek, ang gesture na I cherish alot. I felt so warm, light, lovely og comfortable just being with you love, like di nako gusto mo hawa saimong side and makalimtan nanako tanan problema sa life when I'm with you. I love you so much love, and these memories are deeply cherished sakong heart.</p>",
      "<h2 class='poetry-title'>Our fifth date</h2><p></p>",
      "<h2 class='poetry-title'>Our sixth date</h2><p></p>",
      "<h2 class='poetry-title'>Our seventh date</h2><p></p>",
      "<h2 class='poetry-title'>Our eight date</h2><p></p>",
      "<h2 class='poetry-title'>Our ninth date</h2><p></p>",
      "<h2 class='poetry-title'>Our tenth date</h2><p></p>",
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

        
        