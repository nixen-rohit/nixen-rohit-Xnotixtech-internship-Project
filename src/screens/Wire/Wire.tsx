import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

// Define data for repeating elements
const techIcons = [
  {
    top: "top-[287px]",
    left: "left-[611px]",
    rotate: "rotate-[-35.73deg]",
    imgSrc: "./vector/figma.png",
    imgRotate: "rotate-[-5.73deg]",
    imgPosition: "top-[11px] left-[11px]",
    imgSize: "w-7 h-7",
  },
  {
    top: "top-[237px]",
    left: "left-[693px]",
    rotate: "rotate-[30.75deg]",
    imgSrc: "./vector/aws.png",
    imgRotate: "rotate-[5.75deg]",
    imgPosition: "top-2.5 left-[8px]",
    imgSize: "w-[33px] h-[33px]",
  },
  {
    top: "top-[292px]",
    left: "left-[777px]",
    rotate: "rotate-[-26.76deg]",
    imgSrc: "./vector/nextjs.svg",
    imgRotate: "rotate-[26.76deg]",
    imgPosition: "top-2.5 left-2.5",
    imgSize: "w-[30px] h-[30px]",
  },
  {
    top: "top-[269px]",
    left: "left-[895px]",
    rotate: "rotate-[22.01deg]",
    imgSrc: "./vector/seo.png",
    imgRotate: "rotate-[5.01deg]",
    imgPosition: "top-[-2px] left-[1px]",
    imgSize: "w-[65px] h-[65px]",
  },
  {
    top: "top-[301px]",
    left: "left-[1011px]",
    rotate: "rotate-[-16.14deg]",
    imgSrc: "./vector/nft.png",
    imgRotate: "rotate-[-5.14deg]",
    imgPosition: "top-[-1px] left-[1px]",
    imgSize: "w-[52px] h-[52px]",
  },
  {
    top: "top-[277px]",
    left: "left-[1121px]",
    rotate: "rotate-[-24.30deg]",
    imgSrc: "./vector/gpt.png",
    imgRotate: "rotate-[24.30deg]",
    imgPosition: "top-1 left-[7px]",
    imgSize: "w-[38px] h-[39px]",
  },
];

const notificationCards = [
  {
    top: "top-[188px]",
    left: "left-[1356px]",
    mainCard: {
      image: "./vector/smile-hand-man.png",
      title: "Xenotix Tech",

      message: (
        <>
          {" "}
          Posting but getting zero traction?
          <br />→ Social Media Marketing
        </>
      ),
    },
    secondaryCard: {
      image: "./vector/smile-hand-man.png",
      title: "Xenotix Tech right",
      message: "Start Online Business ?",
      rotation: "rotate-[-9.68deg]",
    },
    frameImage: "./vector/frame-34.svg",
    framePosition: "top-[34px] left-[54px]",
  },
  {
    top: "top-[214px]",
    left: "left-[191px]",
    rotation: "rotate-[16.53deg] ",
    mainCard: {
      image: "./vector/smile-hand-man.png",
      title: "Xenotix Tech ", 
          
      message: (
        <>
          {" "}
          Tired of your 9-5?
          <br /> → Dreaming of your own brand?
        </>
      ),
    },
    secondaryCard: {
      image: "./vector/smile-hand-man.png",
      title: "Xenotix Tech",
      message: "Quit Dreaming. Start Building",
      rotation: "rotate-[-9.68deg]",
    },
    frameImage: "./vector/frame-34.svg",
    framePosition: "top-[40px] left-[52px]",
  },
];

  


// Data for feature cards
const featureCards = [
  {
    title: "UI/UX Designing",
    position: "top-[617px] left-[212px]",
    rotation: "rotate-[-20.86deg]",
    description: (
      <>
        {" "}
        Crafting intuitive, aesthetic, and user-friendly
        <br /> digital experiences
      </>
    ),
    logoGroups: [
      {
        logo: "./vector/figma.png",
        name: "Figma",
        position: "top-[70px] left-[15px] p-[2px] bg-[#c8c8c85c] rounded-[2px]",
        logoSize: "w-[0.5rem] h-[0.5rem]",
        nameStyle: "text-[7px]   ",
      },
      {
        logo: "./vector/adobe.png",
        name: "Adobe XD",
        position: "top-[70px] left-[52px] p-[2px] bg-[#c8c8c85c] rounded-[2px]",
        logoSize: "w-[0.6rem] h-[0.6rem]",
        nameStyle: "text-[7px] pl-[1px]",
      },
      {
        logo: "./vector/wireframe.png",
        name: "Wireframe",
        position: "top-[70px] left-[103px] p-[2px] bg-[#c8c8c85c] rounded-[2px]",
        logoSize: "w-[0.6rem] h-[0.6rem]",
        nameStyle: "text-[7px] pl-[1px] ",
      },
      {
        logo: "./vector/phone.svg",
        name: "Prototype",
        position: "top-[87px] left-[18px] p-[2px] bg-[#c8c8c85c] rounded-[2px] ",
        logoSize: "w-[0.6rem] h-[0.6rem] rotate-[18.86deg]",
        nameStyle: "text-[7px] pl-[1px]",
      },
      {
        logo: "./vector/download.svg",
        name: "Design System",
        position: "top-[87px] left-[69px] p-[2px] bg-[#c8c8c85c] rounded-[2px] ",
        logoSize: "w-[0.5rem] h-[0.5rem] rotate-[18.86deg]",
        nameStyle: "text-[7px] pl-[2px]",
      },
    ],
    gradientCircles: [
      {
        position: "top-[85px] left-[177px] ",
        color:
          "bg-[linear-gradient(180deg,rgba(254,115,96,1)_0%,rgba(162,90,255,1)_100%)]",
      },
      {
        position: "top-[104px] left-[190px]",
        color:
          "bg-[linear-gradient(180deg,rgba(254,115,96,1)_0%,rgba(162,90,255,1)_100%)]",
      },
    ],
  },
  {
    title: "Social Media Marketing",
    position: "top-[620px] left-[1353px]",
    rotation: "rotate-[10.53deg]",
    description: (
      <>
        {" "}
        Unlock a world of possibilities for your brand. Our
        <br /> Streamlined approach ensures that you can maximize
        <br /> your Online Presence.
      </>
    ),    
    tags: [
      { text: "Social", position: "top-0 left-0" },
      { text: "Creatives", position: "top-0 left-[40px]" },
      { text: "Leads", position: "top-[1.1rem] left-0" },
      { text: "Trending Things", position: "top-[1.1rem] left-[2.5rem]" },
      { text: "Optimizations", position: "top-0 left-[87px]" },
    ],
    gradientCircles: [
      {
        position: "top-[121px] left-[177px]",
        color:
          "bg-[linear-gradient(180deg,rgba(66,165,245,1)_0%,rgba(162,90,255,1)_100%)]",
      },
      {
        position: "top-[140px] left-[190px]",
        color:
          "bg-[linear-gradient(180deg,rgba(66,165,245,1)_0%,rgba(162,90,255,1)_100%)]",
      },
    ],
  },
];

export const Wire = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full overflow-hidden"> 
      <div className="bg-white  w-[1512px] h-[1018px]">
        <div className="relative w-[1773px] h-[1089px] top-[118px] left-[-156px]  ">
          <div className="absolute w-[1773px] h-[1063px] top-[26px] left-0">
            {/* Background gradient */}
            <div className="absolute w-[1237px] h-[1011px] top-[52px] left-[348px] rounded-[618.5px/505.5px] blur-[200px] bg-[linear-gradient(180deg,rgba(192,197,248,1)_15%,rgba(255,255,255,1)_100%)]" />

            <img
              className="absolute w-[198px] h-[98px] top-[343px] left-[1159px]"
              alt="Frame"
              src="./vector/Frame-30.svg"
            />

            {/* Tech icons */}
            {techIcons.map((icon, index) => (
              <div
                key={`tech-icon-${index}`}
                className={`absolute w-[50px] h-[50px] ${icon.top} ${icon.left} bg-white rounded-[10px] overflow-hidden ${icon.rotate} shadow-[0px_0px_10px_#00000040]`}
              >
                <img
                  className={`absolute ${icon.imgSize} ${icon.imgPosition} ${
                    icon.imgRotate
                  } ${icon.imgSrc.includes(".png") ? "object-cover" : ""}`}
                  alt={`Tech icon ${index + 1}`}
                  src={icon.imgSrc}
                />
              </div>
            ))}

            {/* Main headings */}
            <div className="absolute w-[677px] top-0 left-[552px] [font-family:'Kaisei_Tokumin',Helvetica] text-black text-[26px] text-center font-medium tracking-[0] leading-normal">
              Xenotix Tech
            </div>
            <div className="absolute w-[677px] top-[35px] left-[555px] [font-family:'Kaisei_Tokumin',Helvetica] font-bold text-black text-[67px] text-center tracking-[0] leading-normal">
              Got a startup Idea !
            </div>
            <div className="absolute w-[677px] top-[134px] left-[545px] [font-family:'Kaisei_Tokumin',Helvetica] font-bold text-black text-[34px] text-center tracking-[0] leading-normal">
              Let&#39;s Turn It Into Reality.
            </div>

            {/* Feature cards */}
            {featureCards.map((card, index) => (
        <Card
          key={`feature-card-${index}`}
          className={`absolute w-[250px] h-[149px] ${card.position} ${card.rotation} bg-white rounded-[20px] overflow-hidden`}
        >
          <CardContent className="p-0 relative h-full">
            {card.title === "UI/UX Designing" ? (
              <div className="relative w-[250px] h-[149px]">
                <img
                  className="absolute w-[105px] h-[92px] top-[-20px] left-[165px] rotate-[20.53deg]"
                  alt="Ellipse"
                  src="./vector/Ellipse-47.svg"
                />
                <div className="absolute top-3 left-4 font-medium text-black text-base">
                  <span className="font-medium text-black text-base">UI</span>
                  <span className="text-[11px]">/</span>
                  <span className="font-medium text-black text-base">UX Designing</span>
                </div>
                <Separator className="absolute w-[49px] h-0.5 top-[34px] left-4 bg-[#376f95]" />
                <div className="absolute top-[42px] left-4 font-normal text-black text-[7px] whitespace-pre-line">
                  {card.description}
                </div>
                {card.logoGroups?.map((group, groupIndex) => (
                  <div
                    key={`logo-group-${groupIndex}`}
                    className={`absolute ${group.position} flex items-center`}
                  >
                    <img
                      className={`${group.logoSize} object-cover`}
                      alt={`${group.name} logo`}
                      src={group.logo}
                    />
                    <span className={`${group.nameStyle} font-normal text-black`}>
                      {group.name}
                    </span>
                  </div>
                ))}
                {card.gradientCircles?.map((circle, circleIndex) => (
                  <div
                    key={`circle-${circleIndex}`}
                    className={`absolute ${
                      circleIndex === 0
                        ? "w-[27px] h-[27px] rounded-[13.5px]"
                        : "w-[18px] h-[18px] rounded-[9px]"
                    } ${circle.position} ${circle.color}`}
                  />
                ))}
              </div>
            ) : (
              <div className="relative w-[343px] h-[185px] -top-9">
                <div className="absolute w-[252px] h-[149px] top-9 left-0">
                  <div className="relative w-[250px] h-[149px] bg-white rounded-[20px]">
                    <div className="absolute top-3 left-4 font-medium text-black text-base leading-[17px] whitespace-nowrap">
                      {card.title}
                    </div>
                    <Separator className="absolute w-[49px] h-0.5 top-[41px] left-4 bg-[#376f95]" />
                    <div className="absolute w-[203px] h-[70px] top-[47px] left-[15px]">
                      <div className="absolute top-0 left-0 font-normal text-black text-[7px]">
                        {card.description}
                      </div>
                      <div className="absolute w-[138px] h-[29px] top-[41px] left-0">
                        {card.tags?.map((tag, tagIndex) => (

                          
                          <Badge
                            key={`tag-${tagIndex}`}
                            className={`absolute ${tag.position}  h-[14px] bg-[#c8c8c85c] rounded-[2px]`}
                          > 
                            <div className="font-normal text-black text-[5px] flex items-center ">
                              
                              <img src="./vector/download.svg" alt={`${tag.text} icon`} className="w-3 h-3 rotate-[20deg] pr-[2px] ml-[-10px]" />
                             <span> {tag.text}</span>
                            </div>
                            
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
     
                {card.gradientCircles?.map((circle, circleIndex) => (
                  <div
                    key={`circle-${circleIndex}`}
                    className={`absolute ${
                      circleIndex === 0
                        ? "w-[27px] h-[27px] rounded-[13.5px]"
                        : "w-[18px] h-[18px] rounded-[9px]"
                    } ${circle.position} ${circle.color}`}
                  />
                ))}
                <img
                  className="absolute w-[151px] h-[147px] top-[13px] left-[181px] rotate-[-10.53deg]"
                  alt="Ellipse"
                  src="./vector/Ellipse-50.svg"
                />
                 
              </div>
            )}
          </CardContent>
        </Card>
      ))}

            <img
              className="absolute w-[147px] h-[98px] top-[373px] left-[445px]"
              alt="Frame"
              src="./vector/frame-31.svg"
            />

            {/* Main IoT section */}
            <Card className="absolute w-[715px] h-[484px] top-[379px] left-[540px] rounded-[20px] overflow-hidden bg-[linear-gradient(180deg,rgba(192,197,248,1)_15%,rgba(255,255,255,1)_100%)]">
              <CardContent className="p-0 relative h-full">
                <div className="relative w-[756px] h-[572px] top-[-3px] -left-5">
                  <img
                    className="absolute w-[621px] h-[401px] top-[86px] left-[67px]"
                    alt="Ellipse"
                    src="./vector/Ellipse-42.svg"
                     
                  />

                  <img
                    className="absolute w-[521px] h-[301px] top-[186px] left-[118px]"
                    alt="Ellipse"
                   src="./vector/Ellipse-41.svg"
                  />

                  <img
                    className="absolute w-[250px] h-[165px] top-[322px] left-[253px]"
                    alt="Ellipse"
                    src="./vector/Ellipse-40.svg"
                  />

                  <div className="absolute w-[756px] h-[413px] top-[159px] left-0">
                    <div className="relative h-[413px]">
                      <img
                        className="absolute w-[378px] h-[318px] top-[95px] left-0"
                        alt="Vector"
                        src="./vector/vector-28.svg"
                      />

                      <img
                        className="absolute w-[378px] h-[318px] top-[95px] left-[378px]"
                        alt="Vector"
                        src="./vector/vector-28.svg"
                      />

                      <img
                        className="absolute w-[369px] h-[109px] top-0 left-2.5"
                        alt="Vector"
                        src="./vector/vector-30.svg"

                      />

                      <img
                        className="absolute w-[369px] h-[109px] top-0 left-[377px]"
                        alt="Vector"
                       src="./vector/vector-31.svg"
                      />
                    </div>
                  </div>

                  <div className="absolute w-[118px] h-[37px] top-[136px] left-[77px] rounded-[20px] bg-[linear-gradient(180deg,rgba(217,217,217,1)_0%,rgba(195,225,246,1)_100%)]" />
                  <div className="absolute w-[118px] h-[37px] top-[327px] left-[78px] rounded-[20px] bg-[linear-gradient(180deg,rgba(217,217,217,1)_0%,rgba(195,225,246,1)_100%)]" />
                  <div className="absolute w-[118px] h-[37px] top-[327px] left-[580px] rounded-[20px] bg-[linear-gradient(180deg,rgba(217,217,217,1)_0%,rgba(195,225,246,1)_100%)]" />
                  <div className="absolute w-[118px] h-[37px] top-[140px] left-[580px] rounded-[20px] bg-[linear-gradient(180deg,rgba(217,217,217,1)_0%,rgba(195,225,246,1)_100%)]" />

                  <div className="absolute w-[37px] h-[15px] top-[245px] left-[311px] bg-[#d9d9d9] rounded-sm" />
                  <div className="absolute w-[37px] h-[15px] top-[245px] left-[415px] bg-[#d9d9d9] rounded-sm" />
                  <div className="absolute w-[37px] h-[15px] top-[357px] left-[360px] bg-[#d9d9d9] rounded-sm -rotate-90" />

                  <div className="absolute w-[715px] h-[484px] top-0 left-[19px] rounded-[20px] overflow-hidden bg-[linear-gradient(180deg,rgba(192,197,248,1)_15%,rgba(255,255,255,1)_100%)]">
                    <div className="absolute w-1.5 h-1.5 top-[203px] left-[585px] bg-white rounded-[3px] border border-solid border-[#d9c7fe]" />
                    <div className="absolute w-1.5 h-1.5 top-[355px] left-[585px] bg-white rounded-[3px] border border-solid border-[#d9c7fe]" />
                    <div className="absolute w-[21px] h-[115px] top-[214px] left-[704px] rounded-[20px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(192,197,247,1)_100%)]" />
                    <div className="absolute w-[21px] h-[115px] top-[227px] left-[-5px] rounded-[20px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(200,204,249,1)_100%)]" />

                    <img
                      className="absolute w-[22px] h-[25px] top-16 left-[630px]"
                      alt="Vector"
                      src="./vector/star.svg"
                    />

                    <img
                      className="absolute w-7 h-3 top-[34px] left-[557px]"
                      alt="Vector"
                      src="./vector/spring-3.svg"
                    />
                  </div>

                  <div className="absolute w-[107px] h-[31px] top-[386px] left-[385px] rounded-[20px] shadow-[0px_4px_4px_#ffffff]" />

                  <div className="absolute w-[115px] h-[179px] top-[238px] left-[323px]">
                    <div className="relative h-[179px]">
                      <img
                        className="absolute w-[59px] h-[178px] top-0 left-14"
                        alt="Vector"
                        src="./vector/right-line.png"
                      />

                      <img
                        className="absolute w-[59px] h-[179px] top-0 left-0"
                        alt="Vector"
                        src="./vector/left-line.png"
                      />
                    </div>
                  </div>

                  {/* Project cards in IoT section */}
                  <div className="absolute w-[101px] h-[81px] top-[201px] left-[385px] bg-[#d9c7fe] rounded-[20px] overflow-hidden">
                    <img
                      className="absolute w-[68px] h-[57px] top-[11px] left-4"
                      alt="Test"
                      src="./vector/robo-machine.png"
                    />
                  </div>

                  <div className="absolute w-[100px] h-[81px] top-[201px] left-[274px] bg-[#a25aff63] rounded-[20px] overflow-hidden">
                    <img
                      className="absolute w-[100px] h-[81px] top-0 left-0 object-cover"
                      alt="Black and white"
                      src="./vector/black-screen.svg"
                    />
                  </div>

                  <img
                    className="absolute w-[25px] h-[31px] top-[222px] left-[367px]"
                    alt="Vector"
                    src="./vector/black-hx.svg"
                  />

                  <div className="absolute w-[100px] h-[81px] top-[381px] left-[273px] bg-[#a25aff63] rounded-[20px] overflow-hidden">
                    <img
                      className="absolute w-[81px] h-[50px] top-5 left-2.5"
                      alt="Black and white"
                      src="./vector/light-car.png"
                    />
                  </div>

                  <div className="absolute w-[101px] h-[81px] top-72 left-[215px] bg-[#bb8ee2] rounded-[20px] overflow-hidden">
                    <img
                      className="absolute w-14 h-[53px] top-[15px] left-[22px] object-cover"
                      alt="Illustration"
                      src="./vector/cloud.svg"
                    />
                  </div>

                  <div className="absolute w-[101px] h-[81px] top-72 left-[445px] bg-[#a25aff63] rounded-[20px] overflow-hidden">
                    <img
                      className="absolute w-[70px] h-[70px] top-2.5 left-[15px] object-cover"
                      alt="Black and white"
                      src="./vector/no-hand-robo.png"
                    />
                  </div>

                  <div className="absolute w-[101px] h-[81px] top-[292px] left-[330px] bg-[#d9c7fe] rounded-[20px] overflow-hidden">
                    <img
                      className="absolute w-[72px] h-[71px] top-[9px] left-[5px]"
                      alt="Illustration"
                      src="./vector/thump.svg"
                    />
                  </div>

                  <div className="absolute w-[100px] h-[81px] top-[381px] left-[385px] bg-[#bb8ee2] rounded-[20px] overflow-hidden">
                    <img
                      className="absolute w-[55px] h-[58px] top-4 left-[23px]"
                      alt="Test"
                      src="./vector/robo-arm.svg"
                    />
                  </div>

                  <div className="absolute w-[30px] h-[18px] top-[319px] left-[423px] bg-black rounded-[5px]" />
                  <div className="absolute w-[30px] h-[18px] top-[395px] left-[364px] bg-black rounded-[5px] rotate-[-16.04deg]" />
                  <div className="absolute w-[30px] h-[18px] top-[319px] left-[306px] bg-black rounded-[5px] rotate-[24.76deg]" />

                  <div className="absolute w-[27px] h-[27px] top-[381px] left-[498px] bg-black rounded-[13.5px]" />
                  <div className="absolute w-7 h-7 top-[239px] left-[227px] bg-black rounded-[14px]" />

                  <div className="absolute w-[17px] h-[17px] top-[386px] left-[503px]">
                    <img
                      className="absolute w-[13px] h-3.5 top-0.5 left-0.5"
                      alt="Vector"
                      src="./vector/big-Y.svg"
                    />
                  </div>

                  <img
                    className="absolute w-2.5 h-2.5 top-[399px] left-[374px]"
                    alt="Vector"
                    src="./vector/joint.svg"
                  />

                  <img
                    className="absolute w-[13px] h-[9px] top-[233px] left-[373px]"
                    alt="Vector"
                    src="./vector/wifi.svg"
                  />

                  <img
                    className="absolute w-3 h-3 top-[247px] left-[235px]"
                    alt="Vector"
                    src="./vector/keys.svg"
                  />

                  <img
                    className="absolute w-3 h-3 top-[322px] left-[315px]"
                    alt="Vector"
                    src="./vector/lock.svg"
                  />

                  <img
                    className="absolute w-3 h-3 top-[322px] left-[432px]"
                    alt="Vector"
                    src="./vector/smile.svg"
                  />

                  <img
                    className="absolute w-7 h-3 top-[434px] left-[412px]"
                    alt="Vector"
                    src="./vector/spring-last.svg"
                  />

                  <div className="absolute w-[97px] h-[25px] top-[135px] left-[319px] rounded-[20px] overflow-hidden shadow-[0px_2px_4px_#b39efe] bg-[linear-gradient(90deg,rgba(179,158,254,1)_0%,rgba(255,255,255,1)_100%)]">
                    <div className="absolute top-1.5 left-[34px] [text-shadow:0px_0px_4px_#c4979740] [font-family:'Kaisei_Tokumin',Helvetica] font-bold text-black text-[8px] text-center tracking-[0] leading-normal">
                      Pracpoint&nbsp;&nbsp;→
                    </div>

                    <img
                      className="w-5 h-5 top-1 left-[11px] absolute object-cover"
                      alt="Image"
                      src="./vector/gift.png"
                    />
                  </div>

                  <img
                    className="absolute w-[39px] h-[35px] top-[122px] left-[265px]"
                    alt="Vector"
                    src="./vector/spring-2.svg"
                  />

                  <div className="absolute top-[42px] left-[207px] [font-family:'Kaisei_Tokumin',Helvetica] font-bold text-black text-[34px] tracking-[0] leading-normal">
                    Curious About IoT..?
                  </div>

                  <div className="absolute w-[279px] top-[89px] left-[282px] [font-family:'Kaisei_Tokumin',Helvetica] font-bold text-black text-[19px] tracking-[0] leading-normal">
                    Why Not Create It?
                  </div>

                  <img
                    className="w-[51px] h-[51px] top-[161px] left-[101px] absolute object-cover"
                    alt="Image"
                    src="./vector/electronic.png"
                  />

                  <img
                    className="w-[61px] h-[61px] top-[357px] left-[600px] absolute object-cover"
                    alt="Image"
                    src="./vector/kid-red.png"
                  />

                  <img
                    className="w-[39px] h-[39px] top-[398px] left-[90px] absolute object-cover"
                    alt="Image"
                    src="./vector/kid-red.png"
                  />

                  <img
                    className="w-[104px] h-[104px] top-[142px] left-[586px] absolute object-cover"
                    alt="Image"
                    src="./vector/kid-red.png"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Branding card */}
            <Card className="absolute w-[237px] h-[72px] top-[518px] left-[1283px] bg-[#a25aff14] rounded-[20px] overflow-hidden rotate-[-7.18deg]">
              <CardContent className="p-0">
                <div className="absolute w-[129px] h-[57px] top-2 left-[71px]">
                  <div className="absolute top-[11px] left-0 [font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-normal whitespace-nowrap">
                    Branding
                  </div>

                  <div className="absolute w-[93px] h-[57px] top-0 left-9 bg-[#645fb591] rounded-[46.63px/28.5px] blur-2xl" />

                  <div className="absolute top-[30px] left-px [font-family:'Inter',Helvetica] font-medium text-[#ffffff78] text-[10px] tracking-[0] leading-normal whitespace-nowrap">
                    Living identities
                  </div>
                </div>

                <div className="absolute w-[157px] h-[5px] top-[77px] left-6 bg-[linear-gradient(90deg,rgba(255,255,255,1)_12%,rgba(196,156,230,1)_48%,rgba(255,255,255,1)_91%)]" />
                <div className="absolute w-[157px] h-[5px] top-[87px] left-[72px] bg-[linear-gradient(90deg,rgba(255,255,255,1)_12%,rgba(186,140,226,1)_63%,rgba(255,255,255,1)_91%)]" />
                <div className="absolute w-[157px] h-[5px] top-[98px] left-[15px] bg-[linear-gradient(90deg,rgba(255,255,255,1)_12%,rgba(186,140,226,1)_63%,rgba(255,255,255,1)_91%)]" />

                <div className="absolute w-[58px] h-[57px] top-3.5 left-[9px]">
                  <div className="absolute w-[57px] h-[57px] top-0 left-px bg-[#a25aff] rounded-[28.5px] blur-2xl" />
                  <div className="absolute w-[47px] h-[47px] top-px left-0 bg-[#ffffffbf] rounded-[10px]" />
                  <img
                    className="absolute w-[30px] h-[30px] top-3 left-2 rotate-[7.18deg] object-cover"
                    alt="Image"
                    src="./vector/gift.png"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Automation card */}
            <Card className="absolute w-[237px] h-[72px] top-[506px] left-72 bg-[#a25aff14] rounded-[20px] overflow-hidden rotate-[-11.45deg]">
              <CardContent className="p-0">
                <div className="absolute w-[194px] h-[63px] top-2 left-2.5">
                  <div className="absolute top-1.5 left-[9px] [font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-normal whitespace-nowrap">
                    Automation
                  </div>

                  <div className="absolute w-[23px] h-[23px] top-[34px] left-[12px] bg-[url(./vector/Ellipse-52-1.svg)] bg-[100%_100%]">
                    <img
                      className="absolute w-[17px] h-[17px] top-1 left-[3px] object-cover"
                      alt="Img"
                      src="./vector/three-face.png"
                    />
                  </div>

                  <div className="absolute w-[23px] h-[23px] top-[34px] left-[52px] bg-[url(./vector/Ellipse-52-2.svg)] bg-[100%_100%]">
                    <img
                      className="absolute w-[15px] h-[15px] top-1 left-[3px] object-cover"
                      alt="Img"
                      src="./vector/n8n.png"
                    />
                  </div>

                  <div className="absolute w-[23px] h-[23px] top-[34px] left-[91px] bg-[url(./vector/Ellipse-52-3.svg)] bg-[100%_100%]">
                    <img
                      className="absolute w-[15px] h-[15px] top-1 left-1 object-cover"
                      alt="Img"
                      src="./vector/lang_chain.png"
                    />
                  </div>

                  <div className="absolute w-[23px] h-[23px] top-[34px] left-[91px] bg-[url(./vector/Ellipse-52-3.svg)] bg-[100%_100%]">
                    <img
                      className="absolute w-[15px] h-[15px] top-1 left-1 object-cover"
                      alt="Img"
                      src="./vector/lang_chain.png"
                    />
                  </div>

                  <div className="absolute w-[25px] h-6 top-[33px] left-[132px]">
                    <div className="relative w-[30px] h-[29px] -top-0.5 -left-0.5">
                      <img
                        className="top-[3px] left-0.5 absolute w-[23px] h-[23px]"
                        alt="Ellipse"
                        src="./vector/Ellipse-52-4.svg"
                      />

                      <img
                        className="absolute w-[30px] h-[29px] top-0 left-0 object-cover"
                        alt="Img"
                        src="./vector/rpa.png"
                      />
                    </div>
                  </div>

                  <div className="absolute w-[23px] h-[23px] top-[34px] left-[171px] bg-[url(./vector/Ellipse-52-5.svg)] bg-[100%_100%]">
                    <img
                      className="absolute w-[15px] h-[15px] top-1 left-1 object-cover content-center"
                      alt="Img"
                      src="./vector/zaiper.png"
                    />
                  </div>

                  <div className="absolute w-[93px] h-[57px] top-0 left-[97px] bg-[#645fb591] rounded-[46.63px/28.5px] blur-2xl" />
                  <div className="absolute w-[57px] h-[57px] top-1.5 left-0 bg-[#a25aff] rounded-[28.5px] blur-2xl" />
                </div>

                <div className="absolute w-[157px] h-[5px] top-[77px] left-6 bg-[linear-gradient(90deg,rgba(255,255,255,1)_12%,rgba(196,156,230,1)_48%,rgba(255,255,255,1)_91%)]" />
                <div className="absolute w-[157px] h-[5px] top-[87px] left-[72px] bg-[linear-gradient(90deg,rgba(255,255,255,1)_12%,rgba(186,140,226,1)_63%,rgba(255,255,255,1)_91%)]" />
                <div className="absolute w-[157px] h-[5px] top-[98px] left-[15px] bg-[linear-gradient(90deg,rgba(255,255,255,1)_12%,rgba(186,140,226,1)_63%,rgba(255,255,255,1)_91%)]" />
              </CardContent>
            </Card>

            {/* Notification cards */}
            {notificationCards.map((card, index) => (
              <div
                key={`notification-${index}`}
                className={`absolute w-[201px] h-[102px] ${card.top} ${card.left} ${card.rotation}`}
              >
                <div className="relative h-full">
                  <img
                    className={`absolute w-[142px] h-[69px]  ${
                      card.framePosition
                    } ${
                      card.rotation
                        ? `rotate-[-${card.rotation
                            .replace("rotate-[", "")
                            .replace("]", "")}]`
                        : ""
                    }`}
                    alt="Frame"
                    src={card.frameImage}
                  />

                  <Card
                    className={`absolute w-[178px] h-[54px] top-[26px] left-5 bg-white rounded-[15px] overflow-hidden ${card.secondaryCard.rotation}`}
                  >
                    <CardContent className="p-0">
                      <div className="relative w-[169px] h-[158px] -top-3.5 left-[-25px]">
                        <div className="absolute w-[147px] h-[158px] top-0 left-0 bg-[#a25aff] rounded-[73.5px/79px] blur-[100px]" />

                        <img
                          className={` rounded-[5px] absolute w-8 h-8 top-[30px] left-8 ${
                            card.secondaryCard.rotation
                              ? `rotate-[-${card.secondaryCard.rotation
                                  .replace("rotate-[", "")
                                  .replace("]", "")}]`
                              : "rotate-[9.68deg]"
                          }`}
                          alt="Rectangle"
                          src={card.secondaryCard.image}
                        />

                        <div
                          className={`absolute top-[46px] left-[69px] rotate-[1.68deg] [font-family:'Inter',Helvetica] font-medium text-black text-[${
                            index === 0 ? "9" : "7"
                          }px] tracking-[0] leading-normal`}
                        >
                          {card.secondaryCard.message}
                        </div>

                        <div className="absolute top-[35px] left-[68px] rotate-[3.02deg] [font-family:'Inter',Helvetica] font-medium text-[#a8a8a8] text-[9px] tracking-[0] leading-normal">
                          {card.secondaryCard.title}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="absolute w-[198px] h-[54px] top-0 left-0 bg-white rounded-[15px] overflow-hidden">
                    <CardContent className="p-0">
                      <img
                        className={` rotate-[2.68deg] rounded-[5px]  absolute w-[${
                          index === 0 ? "29" : "30"
                        }px] h-[${index === 0 ? "33" : "33"}px] top-${
                          index === 0 ? "2.5" : "2.5"
                        } left-${index === 0 ? "2.5" : "2.5"} ${card.rotation} `}
                        alt="Rectangle"
                        src={card.mainCard.image}
                      />

                      <div className="  top-[11px] left-[52px] [font-family:'Inter',Helvetica] text-[#a8a8a8] text-[9px] absolute font-medium tracking-[0] leading-normal">
                        {card.mainCard.title}
                      </div>

                      <div className="absolute top-[22px] left-[52px] [font-family:'Inter',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-normal">
                        {card.mainCard.message}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}

            <img
              className="absolute w-14 h-[33px] top-[37px] left-[1190px]"
              alt="outline-splash.svg"
              src="./vector/outline-splash.svg"
            />

            <img
              className="absolute w-[47px] h-[23px] top-[234px] left-[478px]"
              alt="mini-splash.svg"
              src="./vector/mini-splash.svg"
            />

            <img
              className="absolute w-[127px] h-[110px] top-[15px] left-[318px]"
              alt="vector"
              src="./vector/spring.svg"
            />

            {/* Blockchain card */}
            <Card className="absolute w-[237px] h-[87px] top-[437px] left-[286px] bg-white rounded-[20px] overflow-hidden">
              <CardContent className="p-0">
                <div className="absolute top-3.5 left-[19px] [font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-normal whitespace-nowrap">
                  Blockchain
                </div>

                <div className="absolute w-[23px] h-[23px] top-[42px] left-5 bg-[url(./vector/eth-ellipse.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-[11px] h-[19px] top-0.5 left-1.5"
                    alt="Img"
                    src="./vector/eth.png"
                  />
                </div>

                <div className="absolute w-[23px] h-[23px] top-[42px] left-[68px] bg-[url(./vector/two-ellipse.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-3.5 h-3.5 top-1 left-[5px] object-cover"
                    alt="Img"
                    src="./vector/two.png"
                  />
                </div>

                <div className="absolute w-[23px] h-[23px] top-[42px] left-[110px] bg-[url(./vector/one-ellipse.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-3.5 h-3.5 top-[5px] left-[5px] object-cover"
                    alt="Img"
                    src="./vector/one.png"
                  />
                </div>

                <div className="absolute w-[23px] h-[23px] top-[42px] left-[151px] bg-[url(./vector/nft-ellipse.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-[25px] h-6 top-0 left-0 object-cover"
                    alt="Img"
                    src="./vector/nft-crypto.png"
                  />
                </div>

                <div className="absolute w-[23px] h-[23px] top-[42px] left-[196px] bg-[url(./vector/dapp-ellipse.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-[17px] h-4 top-[3px] left-[3px] object-cover"
                    alt="Img"
                    src="./vector/dapp.png"
                  />
                </div>

                <div className="absolute w-[157px] h-[5px] top-[87px] left-[72px] bg-[linear-gradient(90deg,rgba(255,255,255,1)_12%,rgba(207,176,235,1)_63%,rgba(255,255,255,1)_91%)]" />
                <div className="absolute w-[157px] h-[5px] top-[98px] left-[15px] bg-[linear-gradient(90deg,rgba(255,255,255,1)_12%,rgba(207,176,235,1)_63%,rgba(255,255,255,1)_91%)]" />
              </CardContent>
            </Card>

            {/* AI card */}
            <Card className="absolute w-[257px] h-[188px] top-[435px] left-7 rounded-[20px] overflow-hidden rotate-[25.48deg] bg-[linear-gradient(258deg,rgba(192,197,248,1)_0%,rgba(255,255,255,1)_100%)]">
              <CardContent className="p-0">
                <div className="absolute w-[226px] h-[211px] top-4 left-2.5">
                  <div className="absolute w-[226px] h-[201px] top-2.5 left-0">
                    <div className="absolute w-[153px] h-[46px] top-[57px] left-[126px] bg-[#c1c6f8] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[153px] h-[46px] top-[57px] left-[126px] bg-[#848cdf] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[131px] h-[46px] top-[68px] left-[82px] bg-[#d9d9d959] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[131px] h-[46px] top-[68px] left-[82px] bg-[#d9d9d959] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[131px] h-[46px] top-[68px] left-[82px] bg-[#d9d9d959] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[131px] h-[46px] top-[68px] left-[82px] bg-[#d9d9d959] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[131px] h-[46px] top-[68px] left-[82px] bg-[#d9d9d959] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[131px] h-[46px] top-[68px] left-[82px] bg-[#d9d9d959] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[131px] h-[46px] top-[68px] left-[82px] bg-[#d9d9d959] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[131px] h-[46px] top-[68px] left-[82px] bg-[#d9d9d959] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[131px] h-[46px] top-[68px] left-[82px] bg-[#d9d9d959] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[131px] h-[46px] top-[68px] left-[82px] bg-[#d9d9d959] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[131px] h-[46px] top-[68px] left-[82px] bg-[#d9d9d959] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[131px] h-[46px] top-[68px] left-[82px] bg-[#d9d9d959] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[131px] h-[46px] top-[68px] left-[82px] bg-[#d9d9d959] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[131px] h-[46px] top-[68px] left-[82px] bg-[#d9d9d959] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[131px] h-[46px] top-[68px] left-[82px] bg-[#d9d9d959] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[131px] h-[46px] top-[68px] left-[82px] bg-[#d9d9d959] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[131px] h-[46px] top-[68px] left-[82px] bg-[#d9d9d959] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[131px] h-[46px] top-[68px] left-[82px] bg-[#d9d9d959] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[131px] h-[46px] top-[68px] left-[82px] bg-[#b6bcfc] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[131px] h-[46px] top-[68px] left-[82px] bg-[#b6bcfc] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[110px] h-[46px] top-[78px] left-[38px] bg-[#9da5f959] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[81px] h-[46px] top-[93px] left-[-3px] bg-[#9da5f959] rounded-[10px] -rotate-90" />
                    <div className="absolute w-[81px] h-[46px] top-[93px] left-[-3px] bg-[#9da5f959] rounded-[10px] -rotate-90" />

                    <div className="absolute top-[57px] left-[121px] -rotate-90 [font-family:'Inter',Helvetica] font-medium text-[#848de0] text-base tracking-[0] leading-normal whitespace-nowrap">
                      Mobile
                    </div>

                    <div className="absolute top-[67px] left-[138px] -rotate-90 [font-family:'Inter',Helvetica] font-medium text-[#b6bdfc] text-base tracking-[0] leading-normal whitespace-nowrap">
                      Web-Application
                    </div>

                    <img
                      className="absolute w-[100px] h-[90px] top-[35px] left-[115px] rotate-[-30.48deg]"
                      alt="Vector"
                      src="./vector/Vector-32.svg"
                    />
                  </div>

                  <div className="absolute w-[38px] h-[31px] top-0 left-[9px] bg-[#d9d9d95e] rounded-md" />

                  <div className="absolute w-[110px] h-[25px] top-[3px] left-14">
                    <div className="absolute w-[93px] top-0 left-[17px] [font-family:'Inter',Helvetica] font-medium text-black text-[9px] tracking-[0] leading-normal">
                      Artificial Intelligence
                    </div>

                    <div className="absolute w-[93px] top-[11px] left-0 [font-family:'Inter',Helvetica] font-medium text-[#736d6d] text-[6px] tracking-[0] leading-normal">
                      Startup Growth
                    </div>
                  </div>
                </div>

                <img
                  className="absolute w-[21px] h-[15px] top-[-519px] left-[-159px] rotate-[-25.48deg]"
                  alt="Group"
                  src="/group-159.png"
                />
              </CardContent>
            </Card>

            {/* Google Ads card */}
            <Card className="absolute w-[237px] h-[87px] top-[452px] left-[1280px] bg-white rounded-[20px] overflow-hidden">
              <CardContent className="p-0">
                <div className="absolute w-[47px] h-[47px] top-[21px] left-4 bg-[#d9d9d959] rounded-[10px]">
                  <img
                    className="absolute w-[31px] h-[31px] top-2 left-2 object-cover"
                    alt="Facebook f logo"
                    src="./vector/google.png"
                  />
                </div>

                <div className="absolute w-[121px] h-[43px] top-5 left-[77px]">
                  <div className="absolute top-[21px] left-0 [font-family:'Inter',Helvetica] font-medium text-[#a8a8a8] text-lg tracking-[0] leading-normal">
                    <span className="[font-family:'Inter',Helvetica] font-medium text-[#a8a8a8] text-lg tracking-[0]">
                      4.8
                    </span>
                    <span className="text-[10px]"> Reviews</span>
                  </div>

                  <div className="absolute w-[121px] top-0 left-0 [font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-5 whitespace-nowrap">
                    Google Ads
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* META Ads card */}
            <Card className="absolute w-[257px] h-[188px] top-[460px] left-[1486px] rounded-[20px] overflow-hidden rotate-[-28.10deg] bg-[linear-gradient(258deg,rgba(192,197,248,1)_0%,rgba(255,255,255,1)_100%)]">
              <CardContent className="p-0">
                <div className="absolute w-[57px] h-[57px] top-2 left-[11px]">
                  <div className="absolute w-[47px] h-[47px] top-[5px] left-[5px] bg-[#d9d9d959] rounded-[10px]" />
                  <img
                    className="absolute w-[42px] h-[42px] top-[7px] left-[7px] rotate-[28.10deg] object-cover"
                    alt="Facebook f logo"
                    src="./vector/facebook_logo.svg"
                  />
                </div>

                <div className="absolute w-[57px] h-[57px] top-1.5 left-[71px]">
                  <div className="absolute w-[47px] h-[47px] top-[5px] left-1.5 bg-[#d9d9d959] rounded-[10px]" />
                  <img
                    className="absolute w-[42px] h-[42px] top-[7px] left-[7px] rotate-[28.10deg] object-cover"
                    alt="Pngtreeinstagram"
                    src="./vector/insta_logo.svg"
                  />
                </div>

                <div className="absolute w-[70px] h-[21px] top-6 left-[141px] bg-[#d9d9d959] rounded-[10px]">
                  <div className="absolute top-1 left-[25px] [font-family:'Inter',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-normal">
                    Verified
                  </div>

                  <div className="absolute w-[15px] h-[15px] top-1 left-[9px] rounded-[50px] overflow-hidden">
                    <div className="relative w-[15px] h-[15px] top-px left-0.5">
                      <img
                        className="absolute w-[15px] h-[15px] top-[-2px] left-[-2px] rotate-[28.10deg]"
                        alt="Vector"
                        src="./vector/green.svg"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute top-[155px] left-[18px] [font-family:'Inter',Helvetica] font-medium text-[#a8a8a8] text-[10px] tracking-[0] leading-normal whitespace-nowrap">
                  Ad Spend, Well Spent.
                </div>

                <div className="absolute w-[135px] top-[77px] left-4 [font-family:'Inter',Helvetica] font-medium text-black text-[40px] tracking-[4.80px] leading-[33px]">
                  META
                  <br />
                  Ads
                </div>

                <img
                  className="absolute w-[100px] h-[63px] top-[-1189px] left-[-851px] rotate-[28.10deg]"
                  alt="Ellipse"
                  src="/ellipse-55.svg"
                />
              </CardContent>
            </Card>
          </div>

          <img
            className="absolute w-[58px] h-[63px] top-0 left-[1460px]"
            alt="Vector"
            src="./vector/splash.svg"
          />
        </div>
      </div>
    </div>
  );
};
