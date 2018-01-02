const sections = (
  state = [{
            title: "AboutMe",
            activePage:0,
            pages: [{
                    subtitle: "Overview",
                    body:"Ahmed Genaidy, UX/UI Designer Lead at fleetster GmbH.\n My Main focus is to make better communication between developers, designers and business. I have experience on developing design language systems and developing sketch plugins to make the designers life easier.",
                    coverPic:"/imgs/overviewPic.png"
                  },
                  {
                    subtitle: "Education",
                    body: "Faculty of Engineering Ain Shams University Egypt. Graduation Project: Virtual Reality game using Oculus Rift, Kinect, Leap motion, IMU sensors, Arduino; Unity 3D, C# 8 Programming, 3D Studio Max and Photoshop. Bachelor of Computer Engineering. \n \nGlobal Business Institute Program at Kelley School of Business Indiana University, US (July 2016) Business, Entrepreneurship, Presentation skills, Elevator pitching, Accounting and Leadership skills. (July 2016) Project: Top 12 business models in the program.",
                    coverPic:"/imgs/education.png"
                  }]
          },
          {
            title: "Projects",
            activePage:0,
            pages: [{
                    subtitle: "Cuju App",
                    body: `Social Training Soccer app, I worked on this app from scratch with “The D GmbH” company.\n  I started this app from the Ideation phase to user work flows, Low fidality diagrams, High Fidality diagrams, Wireframing, UI designing, prototyping and user Testing. In addtion to the branding and branding guildlines.`,
                    coverPic: "/imgs/cuju.png"
                    },
                    {
                    subtitle: "fleetster",
                    body:`fleetster corporate car sharing platform, I worked on this project with “fleetster GmbH” company.\n I developed design langauge system for the platform that can be customized for any whitelabel by one click, and turned everything to component based design.`,
                    coverPic:"/imgs/fleetster.png"
                    },
                    {
                    subtitle: "Smart",
                    body:`Drop Smart App, I worked on this app with “fleetster GmbH” company.\n I designed design language system for smart app following the smart branding guildlines and I designed the app using this system.`,
                    coverPic:"/imgs/smart.png"
                    },
                    {
                    subtitle: "botit",
                    body:`Chatbot app for ordering food, I worked on this app from scratch with “MO4 Networks” company.\n I was leading Team of 6 developers in this product. I was acting as scrum master. I started this app from the Ideation phase to user work flows, Low fidality diagrams, High Fidality diagrams, Wireframing, UI designing, Prototyping and user Testing. In addtion to the branding and branding guildlines.`,
                    coverPic:"/imgs/botit.png"
                    }
          ]
          },
          {
            title: "Contact Me",
            activePage:0,
            pages: [{
                    subtitle: "Contacts",
                    body:"Email: \n ahmad.migo@gmail.com \n \n Dribbble: \n https://dribbble.com/migoart \n \n Medium: \n https://medium.com/@ser_migo \n \n Twitter: \n https://twitter.com/ser_migo \n \n Github: \n https://github.com/ahmedmigo",
                    coverPic:"/imgs/contactus.png"
                    }]
          }],action) => {
  return state;
}
export default sections;
