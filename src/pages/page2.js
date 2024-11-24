import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import "./page2.css"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "green",
  }));

const Page2 = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  const [isExpanded2, setIsExpanded2] = useState(false);

  const handleToggle2 = () => {
    setIsExpanded2(!isExpanded2);
  };
  const [isExpanded3, setIsExpanded3] = useState(false);

  const handleToggle3 = () => {
    setIsExpanded3(!isExpanded3);
  };
  return (
    <>
    <Box sx={{ display:'flex', flexDirection: 'column', justifyContent:'space-evenly',flexGrow: 1 }}>
      <Item sx={{color: 'black', m: '25px',mr: '20%', ml: '20%'}}>
        <h1>The Olympic Games: A Celebration of Global Unity, Athleticism, and Tradition</h1>
        <span id="intro">
        The Olympic Games, an event that brings together the finest athletes from around the world, is much more than just a sporting competition. It is a symbol of global unity, human excellence, and cultural exchange. Held every four years, with alternating Summer and Winter Games, the Olympics have become a cherished tradition that represents the best of humanity’s competitive spirit, endurance, and resilience.
        Over time, the Olympics have evolved from their origins in Ancient Greece to a modern spectacle that captivates billions of people. This article will explore the history of the Olympics, the significance of the Games, and how they continue to inspire and bring nations together.
        </span>
        <button onClick={handleToggle} id="myBtn">
          {isExpanded ? "Read less" : "..."}
        </button>
        {isExpanded && (
        <span>
          <hr id="titlehr"/>
          <h2>A Brief History of the Olympic Games</h2>
          <hr className="normalhr"/>
          The origins of the Olympic Games date back to Ancient Greece, specifically to Olympia in 776 BC. The original Olympic Games were held in honor of Zeus, the king of the Greek gods, and were an important part of the Panhellenic Games, which also included events like the Pythian, Nemean, and Isthmian Games. Athletes from different Greek city-states competed in events such as foot races, wrestling, long jump, and chariot racing. These early Games were as much a religious festival as they were a sporting competition, and they held great significance in Greek society.
          However, the Ancient Olympic Games came to an end in AD 393 when the Roman Emperor Theodosius I banned all pagan festivals, including the Olympics. For centuries, the event was forgotten until its revival in the late 19th century, spearheaded by French educator and historian Baron Pierre de Coubertin. Inspired by the idea of promoting physical fitness, international cooperation, and peace, Coubertin proposed the establishment of a modern version of the Olympics.
          The first modern Olympic Games were held in Athens in 1896, featuring 241 athletes from 14 nations competing in 43 events. Since then, the Olympics have grown into the world’s foremost international sporting event, with thousands of athletes from over 200 nations competing in hundreds of events across a wide variety of sports.
          <hr className="normalhr"/>
          <h2>The Modern Olympic Movement</h2>
          <hr className="normalhr"/>
          The modern Olympic Games are organized by the International Olympic Committee (IOC), which was founded by Pierre de Coubertin in 1894. The IOC is responsible for overseeing all aspects of the Games, from selecting host cities to determining which sports are included.
          The Summer and Winter Games take place every four years, alternating every two years, with the Summer Olympics held in years divisible by four, and the Winter Olympics occurring in even-numbered years between Summer Games. This cycle allows for continuous engagement with the Olympic spirit while providing opportunities for athletes specializing in different types of sports.
          The Summer Olympics feature a wide range of events, from athletics, swimming, and gymnastics, to team sports like basketball and soccer. The Winter Olympics, on the other hand, include sports that are traditionally played on ice and snow, such as skiing, ice hockey, and figure skating. Over the years, new sports have been added to both Summer and Winter Games to reflect changing trends and the growing popularity of different disciplines.
          <hr className="normalhr"/>
          <h2>The Olympic Spirit: Unity and Peace</h2>
          <hr className="normalhr"/>
          At its core, the Olympics are more than just a sporting event. They are a celebration of humanity’s shared values, aspirations, and resilience. The Games are a powerful platform for promoting global unity and peace, and their motto — "Citius, Altius, Fortius" (Faster, Higher, Stronger) — reflects the timeless desire to push the boundaries of human potential.
          The Olympics are unique in that they bring together athletes from virtually every country in the world. Regardless of nationality, ethnicity, religion, or political affiliation, the athletes march together during the opening ceremony, united under the Olympic flag. This moment serves as a poignant reminder of the common humanity that binds us all, even in a world often divided by conflict and differences.
          The Olympic Games have long been a symbol of hope and peace. This is perhaps best exemplified by the Olympic Truce, a tradition dating back to Ancient Greece. During the Games, all conflicts and hostilities were supposed to cease to ensure the safe travel and participation of athletes. Today, the IOC continues to promote this concept, calling for peace and cooperation among nations during the Olympic period.
          The Games have also played a significant role in addressing social and political issues. For example, the 1968 Mexico City Olympics were the stage for a powerful protest by American athletes Tommie Smith and John Carlos, who raised their fists during the medal ceremony to protest racial injustice in the United States. The Games have also been a platform for promoting gender equality, with the inclusion of more women’s events and female athletes playing a larger role in the Olympics over time.
          <hr className="normalhr"/>
          <h2>The Olympics as a Showcase of Excellence and Inspiration</h2>
          <hr className="normalhr"/>
          Beyond the ideals of peace and unity, the Olympics are a showcase of the world’s best athletic talent. Every four years, athletes dedicate their lives to training, perfecting their skills, and competing at the highest level. For many, the opportunity to compete at the Olympics represents the pinnacle of their careers, and the chance to win an Olympic medal is the ultimate goal.
          The athletes who compete in the Olympics embody the spirit of perseverance, determination, and discipline. Whether they are competing in a high-profile event like the 100-meter sprint or a lesser-known sport like curling, these athletes demonstrate the power of hard work and dedication.
          The Olympics have produced countless memorable moments that have inspired generations of people around the world. From Jesse Owens’ triumph at the 1936 Berlin Olympics, where he won four gold medals in defiance of Nazi ideology, to the "Miracle on Ice" at the 1980 Winter Olympics, where the underdog U.S. hockey team defeated the heavily favored Soviet Union, the Games are full of stories that resonate with people on a deep emotional level.
          The Olympic Games also inspire millions of people to engage in sports and physical activity. The visibility of different sports on a global stage encourages young people to pursue athletic dreams, and the Olympic ideals of excellence, friendship, and respect serve as guiding principles for athletes and spectators alike.
          <hr className="normalhr"/>
          <h2>Challenges and Controversies</h2>
          <hr className="normalhr"/>
          While the Olympics are a celebration of athletic excellence and global unity, they have not been without controversy. The Games have often been a stage for political tensions, boycotts, and protests. For example, the 1980 Moscow Olympics were boycotted by the United States and other nations in response to the Soviet Union’s invasion of Afghanistan. Similarly, the 1984 Los Angeles Olympics were boycotted by the Soviet Union and its allies.
          The Olympics have also faced challenges related to the costs and logistics of hosting the event. Host cities are often left with massive infrastructure projects and expenses that can burden local economies. In some cases, the construction of Olympic venues has led to displacement and environmental concerns.
          Additionally, the use of performance-enhancing drugs has been a persistent issue in the Olympics. While the IOC has made significant strides in improving drug testing and anti-doping measures, the integrity of the Games has been called into question on several occasions due to high-profile doping scandals.
          <hr className="normalhr"/>
          <h2>Conclusion</h2>
          <hr className="normalhr"/>
          The Olympic Games represent the best of what humanity can achieve — unity, peace, and excellence. They are a celebration of the values that bring people together across borders and inspire us to reach for our highest potential. Despite the challenges and controversies, the Olympics continue to capture the imagination of the world, providing a platform for athletes to showcase their talents and for nations to come together in the spirit of friendly competition.
          As the Olympics continue to evolve, their core message remains the same: that through sport, we can build a better, more peaceful world. Whether as athletes or spectators, we are all a part of the Olympic spirit, striving to be faster, higher, and stronger in everything we do.
        </span>
        
        )}
      </Item>
      <Item sx={{color: 'black', mb: '20px', mr: '20%', ml: '20%'}}>
      <h1>De Antika Olympiska Spelen – Ursprung och Traditioner</h1>
        <span id="intro">
        De första olympiska spelen hölls i Olympia i Grekland 776 f.Kr., men det
        finns teorier om att de kan ha hållits ännu tidigare. Spelen arrangerades
        för att hedra den grekiska guden Zeus, och tävlingarna var en viktig del
        av den grekiska kulturen. Endast fria, grekiska män fick delta, och
        evenemanget började som en enkel tävling i löpning. Med tiden 
        utökades programmet till att inkludera grenar som brottning, 
        boxning, och fyrspannskörning.
        </span>
        <button onClick={handleToggle2} id="myBtn">
          {isExpanded2 ? "Read less" : "..."}
        </button>
        {isExpanded2 && (
        <span>
          <hr className="normalhr"/>
          En av de mest fascinerande aspekterna av de antika spelen är att de 
          kunde leda till fred under en period av annars ständiga konflikter 
          mellan grekiska stadsstater. Under spelen rådde det något som kallades 
          för "Olympisk frid", en vapenvila som tillät tävlande och åskådare att 
          resa säkert till och från Olympia. Detta koncept är fortfarande aktuellt 
          idag, och FN utfärdar varje år en resolution om vapenvila under de moderna 
          olympiska spelen
          <hr className="normalhr"/>
          <h2>Baron Pierre de Coubertin och de Moderna Olympiska Spelen
          </h2>
          <hr className="normalhr"/>
          Efter att de antika spelen förbjöds år 393 e.Kr. av den romerska 
          kejsaren Theodosius I, var det först över 1500 år senare som 
          spelen återuppstod. Den franske aristokraten Pierre de Coubertin 
          var en av de främsta drivkrafterna bakom återupplivandet av spelen. 
          Inspirerad av en önskan att förena nationer och främja fred genom 
          idrott, grundade han den Internationella Olympiska Kommittén (IOK) 
          1894, och två år senare, 1896, hölls de första moderna olympiska 
          spelen i Aten.

          De moderna spelen introducerade många nya grenar och lät även kvinnor 
          delta, om än i begränsad omfattning i början. Coubertins idé om 
          "det viktigaste i livet är inte att segra, utan att kämpa väl" blev 
          en central del av den olympiska andan och fortsätter att prägla spelen 
          än idag.
          <hr className="normalhr"/>
          <h2>Den Första Kvinnan att Delta – Hélène de Pourtalès</h2>
          <hr className="normalhr"/>
          När kvinnor först tilläts delta i olympiska spelen 1900, fanns det 
          fortfarande begränsningar för vilka sporter de kunde tävla i. 
          Hélène de Pourtalès från Schweiz blev den första kvinnan att vinna 
          en olympisk medalj som en del av ett seglingsteam. 
          Hon bröt ny mark och banade väg för framtida generationer av kvinnliga 
          idrottare som idag tävlar i lika många sporter som män.
          <hr className="normalhr"/>
          <h2>Jesse Owens - En Historisk Seger i Nazityskland</h2>
          <hr className="normalhr"/>
          De olympiska spelen i Berlin 1936 var fyllda med kontroverser, 
          eftersom de hölls i Nazityskland, och Adolf Hitler ville använda 
          spelen för att visa upp Tysklands överlägsenhet. 
          Den amerikanske friidrottaren Jesse Owens, en svart man, slog ett 
          slag mot rasismen genom att vinna fyra guldmedaljer i sprint och 
          längdhopp. Hans prestation blev en kraftfull protest mot Hitlers 
          ideologi och visade världen att idrott kunde övervinna fördomar 
          och politiska hinder.
          
          Owens prestation i Berlin är en av de mest omtalade ögonblicken 
          i olympiska spelens historia och påminner om sportens förmåga att 
          förena människor trots ideologiska barriärer. 
          Hans prestation fick stort genomslag och inspirerade miljoner.
          <hr className="normalhr"/>
          <h2>Nadia Comăneci – Den Första Perfekta Tioren</h2>
          <hr className="normalhr"/>
          Vid de olympiska spelen i Montreal 1976 satte den rumänska gymnasten 
          Nadia Comăneci en historisk milstolpe. Hon blev den första gymnastiken 
          att få en perfekt 10,0 i poäng, något som tidigare ansetts omöjligt att 
          uppnå. Domarnas skärmar var till och med inte inställda på att kunna 
          visa en tia, så de fick visa 1,0 istället.
          
          Nadias prestation, som vid denna tid bara var 14 år gammal, förändrade 
          synen på gymnastik och satte en ny standard för sportens tekniska 
          skicklighet. Hennes framträdande var ett exempel på ungdomlig styrka 
          och passion som bidrog till att popularisera gymnastik som en olympisk 
          sport världen över.
          <hr className="normalhr"/>
          <h2>Miracle on Ice – USA
          Ishockeylag Slår Sovjetunionen 1980</h2>
          <hr className="normalhr"/>
          Vinter-OS i Lake Placid 1980 bevittnade en av de största skrällarna 
          i idrottshistorien när USA unga ishockeylag slog det oslagbara 
          Sovjetunionen. Sovjetunionen hade dominerat ishockey under flera 
          årtionden, och USA lag bestod till största delen av amatörer och 
          universitetsstudenter.
          
          USA seger i semifinalen mot Sovjetunionen, som kom att kallas 
          "Miracle on Ice", blev snabbt en symbol för amerikansk beslutsamhet 
          och hopp under en tid då kalla kriget skapade spänningar mellan de 
          två länderna. Matchen ledde till att USA senare vann guldmedaljen 
          och har sedan dess inspirerat många inom ishockey och idrott överlag.
          <hr className="normalhr"/>
          <h2>När Michael Phelps Skrev Historia i Peking 2008</h2>
          <hr className="normalhr"/>
          Vid de olympiska sommarspelen i Peking 2008 skrev den amerikanske 
          simmaren Michael Phelps historia genom att vinna åtta guldmedaljer 
          – fler än någon annan idrottare under ett och samma olympiska spel. 
          Phelps prestationer under dessa spel etablerade honom som en av de 
          största olympiska idrottarna genom tiderna. Hans dominans i poolen 
          och hans förmåga att klara av så många tävlingar på kort tid blev 
          ett bevis på både fysiskt och mentalt fokus.
          
          Phelps rekord på totalt 23 olympiska guldmedaljer, inklusive de han 
          vann vid senare spel, är ett mål som många simmare idag strävar efter 
          men få ens kommer i närheten av att nå. Han blev en inspirationskälla 
          för unga simmare och en symbol för att sträva efter perfektion.
          <hr className="normalhr"/>
          <h2>Simone Biles och Frågan om Mental Hälsa</h2>
          <hr className="normalhr"/>
          Under Tokyo-OS 2021 tog gymnastikens superstjärna Simone Biles ett 
          historiskt steg som visade på vikten av mental hälsa. 
          Trots att hon var favorit i flera grenar valde hon att avstå från 
          flera tävlingar för att prioritera sitt välmående. 
          Hennes beslut att tala öppet om mentala utmaningar inspirerade många 
          och startade en viktig dialog om pressen och de psykiska utmaningarna 
          som elitidrottare står inför.
          
          Biles gjorde så småningom en comeback och fick en medalj, men hennes 
          största seger var kanske att hon visade att mental hälsa är lika viktig 
          som fysisk styrka. Detta markerade en ny era för idrotten och hur atleter
          ser på sitt eget välmående.
          <hr className="normalhr"/>
          <h2>Den Första Digitala och Publikfria OS – Tokyo 2021</h2>
          <hr className="normalhr"/>
          Tokyo-OS 2021 är historiska av många anledningar. För första gången 
          hölls ett olympiskt spel helt utan publik på grund av COVID-19-pandemin. 
          Trots att spelen sköts upp ett år, fortsatte de under strikta 
          restriktioner och blev de första ”digitala” spelen där miljontals 
          åskådare från hela världen följde tävlingarna hemifrån.
          
          Detta OS markerade också hur teknik och digital innovation kunde 
          föra spelen till människor världen över trots de utmaningar som 
          pandemin innebar. Denna nya modell för spelens genomförande kan 
          även komma att inspirera framtida olympiska evenemang.
          <hr className="normalhr"/>
          <h2>Sammanfattning</h2>
          <hr className="normalhr"/>
          The Olympic Games represent the best of what humanity can achieve — unity, peace, and excellence. They are a celebration of the values that bring people together across borders and inspire us to reach for our highest potential. Despite the challenges and controversies, the Olympics continue to capture the imagination of the world, providing a platform for athletes to showcase their talents and for nations to come together in the spirit of friendly competition.
          As the Olympics continue to evolve, their core message remains the same: that through sport, we can build a better, more peaceful world. Whether as athletes or spectators, we are all a part of the Olympic spirit, striving to be faster, higher, and stronger in everything we do.
        </span>
        
        )}
      </Item>
      <Item sx={{color: 'black', mb: '20px', mr: '20%', ml: '20%'}}>
      <h1>The Olympic Games: A Celebration of Global Unity, Athleticism, and Tradition</h1>
        <span id="intro">
        The Olympic Games, an event that brings together the finest athletes from around the world, is much more than just a sporting competition. It is a symbol of global unity, human excellence, and cultural exchange. Held every four years, with alternating Summer and Winter Games, the Olympics have become a cherished tradition that represents the best of humanity’s competitive spirit, endurance, and resilience.
        Over time, the Olympics have evolved from their origins in Ancient Greece to a modern spectacle that captivates billions of people. This article will explore the history of the Olympics, the significance of the Games, and how they continue to inspire and bring nations together.
        </span>
        <button onClick={handleToggle3} id="myBtn">
          {isExpanded3 ? "Read less" : "..."}
        </button>
        {isExpanded3 && (
        <span>
          <hr id="titlehr"/>
          <h2>A Brief History of the Olympic Games</h2>
          <hr className="normalhr"/>
          The origins of the Olympic Games date back to Ancient Greece, specifically to Olympia in 776 BC. The original Olympic Games were held in honor of Zeus, the king of the Greek gods, and were an important part of the Panhellenic Games, which also included events like the Pythian, Nemean, and Isthmian Games. Athletes from different Greek city-states competed in events such as foot races, wrestling, long jump, and chariot racing. These early Games were as much a religious festival as they were a sporting competition, and they held great significance in Greek society.
          However, the Ancient Olympic Games came to an end in AD 393 when the Roman Emperor Theodosius I banned all pagan festivals, including the Olympics. For centuries, the event was forgotten until its revival in the late 19th century, spearheaded by French educator and historian Baron Pierre de Coubertin. Inspired by the idea of promoting physical fitness, international cooperation, and peace, Coubertin proposed the establishment of a modern version of the Olympics.
          The first modern Olympic Games were held in Athens in 1896, featuring 241 athletes from 14 nations competing in 43 events. Since then, the Olympics have grown into the world’s foremost international sporting event, with thousands of athletes from over 200 nations competing in hundreds of events across a wide variety of sports.
          <hr className="normalhr"/>
          <h2>The Modern Olympic Movement</h2>
          <hr className="normalhr"/>
          The modern Olympic Games are organized by the International Olympic Committee (IOC), which was founded by Pierre de Coubertin in 1894. The IOC is responsible for overseeing all aspects of the Games, from selecting host cities to determining which sports are included.
          The Summer and Winter Games take place every four years, alternating every two years, with the Summer Olympics held in years divisible by four, and the Winter Olympics occurring in even-numbered years between Summer Games. This cycle allows for continuous engagement with the Olympic spirit while providing opportunities for athletes specializing in different types of sports.
          The Summer Olympics feature a wide range of events, from athletics, swimming, and gymnastics, to team sports like basketball and soccer. The Winter Olympics, on the other hand, include sports that are traditionally played on ice and snow, such as skiing, ice hockey, and figure skating. Over the years, new sports have been added to both Summer and Winter Games to reflect changing trends and the growing popularity of different disciplines.
          <hr className="normalhr"/>
          <h2>The Olympic Spirit: Unity and Peace</h2>
          <hr className="normalhr"/>
          At its core, the Olympics are more than just a sporting event. They are a celebration of humanity’s shared values, aspirations, and resilience. The Games are a powerful platform for promoting global unity and peace, and their motto — "Citius, Altius, Fortius" (Faster, Higher, Stronger) — reflects the timeless desire to push the boundaries of human potential.
          The Olympics are unique in that they bring together athletes from virtually every country in the world. Regardless of nationality, ethnicity, religion, or political affiliation, the athletes march together during the opening ceremony, united under the Olympic flag. This moment serves as a poignant reminder of the common humanity that binds us all, even in a world often divided by conflict and differences.
          The Olympic Games have long been a symbol of hope and peace. This is perhaps best exemplified by the Olympic Truce, a tradition dating back to Ancient Greece. During the Games, all conflicts and hostilities were supposed to cease to ensure the safe travel and participation of athletes. Today, the IOC continues to promote this concept, calling for peace and cooperation among nations during the Olympic period.
          The Games have also played a significant role in addressing social and political issues. For example, the 1968 Mexico City Olympics were the stage for a powerful protest by American athletes Tommie Smith and John Carlos, who raised their fists during the medal ceremony to protest racial injustice in the United States. The Games have also been a platform for promoting gender equality, with the inclusion of more women’s events and female athletes playing a larger role in the Olympics over time.
          <hr className="normalhr"/>
          <h2>The Olympics as a Showcase of Excellence and Inspiration</h2>
          <hr className="normalhr"/>
          Beyond the ideals of peace and unity, the Olympics are a showcase of the world’s best athletic talent. Every four years, athletes dedicate their lives to training, perfecting their skills, and competing at the highest level. For many, the opportunity to compete at the Olympics represents the pinnacle of their careers, and the chance to win an Olympic medal is the ultimate goal.
          The athletes who compete in the Olympics embody the spirit of perseverance, determination, and discipline. Whether they are competing in a high-profile event like the 100-meter sprint or a lesser-known sport like curling, these athletes demonstrate the power of hard work and dedication.
          The Olympics have produced countless memorable moments that have inspired generations of people around the world. From Jesse Owens’ triumph at the 1936 Berlin Olympics, where he won four gold medals in defiance of Nazi ideology, to the "Miracle on Ice" at the 1980 Winter Olympics, where the underdog U.S. hockey team defeated the heavily favored Soviet Union, the Games are full of stories that resonate with people on a deep emotional level.
          The Olympic Games also inspire millions of people to engage in sports and physical activity. The visibility of different sports on a global stage encourages young people to pursue athletic dreams, and the Olympic ideals of excellence, friendship, and respect serve as guiding principles for athletes and spectators alike.
          <hr className="normalhr"/>
          <h2>Challenges and Controversies</h2>
          <hr className="normalhr"/>
          While the Olympics are a celebration of athletic excellence and global unity, they have not been without controversy. The Games have often been a stage for political tensions, boycotts, and protests. For example, the 1980 Moscow Olympics were boycotted by the United States and other nations in response to the Soviet Union’s invasion of Afghanistan. Similarly, the 1984 Los Angeles Olympics were boycotted by the Soviet Union and its allies.
          The Olympics have also faced challenges related to the costs and logistics of hosting the event. Host cities are often left with massive infrastructure projects and expenses that can burden local economies. In some cases, the construction of Olympic venues has led to displacement and environmental concerns.
          Additionally, the use of performance-enhancing drugs has been a persistent issue in the Olympics. While the IOC has made significant strides in improving drug testing and anti-doping measures, the integrity of the Games has been called into question on several occasions due to high-profile doping scandals.
          <hr className="normalhr"/>
          <h2>Conclusion</h2>
          <hr className="normalhr"/>
          The Olympic Games represent the best of what humanity can achieve — unity, peace, and excellence. They are a celebration of the values that bring people together across borders and inspire us to reach for our highest potential. Despite the challenges and controversies, the Olympics continue to capture the imagination of the world, providing a platform for athletes to showcase their talents and for nations to come together in the spirit of friendly competition.
          As the Olympics continue to evolve, their core message remains the same: that through sport, we can build a better, more peaceful world. Whether as athletes or spectators, we are all a part of the Olympic spirit, striving to be faster, higher, and stronger in everything we do.
        </span>
        
        )}
      </Item>
      </Box>
    </>
  );
};

export default Page2;
