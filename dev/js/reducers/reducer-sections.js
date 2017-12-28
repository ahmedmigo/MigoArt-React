const sections = (
  state = [{
            title: "AboutMe",
            activePage:0,
            pages: [{
                    subtitle: "Overview",
                    body:"I’m <b>Ahmed Genaidy</b>, UX/UI designer with a Computer Engineering & Business background. I started doing interactive designs 5 years ago. My education helped me understand the business goals of the project I am working on, turning them into an interactive user-friendly product that can be realized by utilizing and pushing the limits of technologies used by the engineers.",
                    coverPic:"/imgs/overviewPic.png"
                  },
                  {
                    subtitle: "Education",
                    body:["Faculty of Engineering Ain Shams University, Cairo, Egypt Virtual Reality game using Oculus Rift, Kinect, Leap motion, IMU sensors, Arduino; Unity 3D, C# 8 Programming, 3D Studio Max and Photoshop. Academic Projects: Web Application for Student Activities: Database design, MySQL, HTML, CSS and PHP. Desktop Peer-to-Peer Chatting Applicaiton: Java. Bachelor of Computer Engineering, Class 2012-2016.",
                    " Global Business Institute Program at Kelley School of Business Indiana University, US (July 2016) Business, Entrepreneurship, Presentation skills, Elevator pitching, Accounting and Leadership skills. (July 2016) Project: Top 12 business models in the program."],
                    coverPic:"/imgs/education.png"
                  },
                  {
                    subtitle: "SoftSkills",
                    body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                    coverPic:"http://practicalneurology.com/images/article/2017-02/0217_PN_Business_Fig.png"
                  }]
          },
          {
            title: "Projects",
            activePage:0,
            pages: [{
                    subtitle: "Botit",
                    body:"Bot for ordering food",
                    coverPic:"https://d30y9cdsu7xlg0.cloudfront.net/png/415507-200.png"
                    },
                    {
                    subtitle: "fleetster",
                    body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                    coverPic:"https://static1.squarespace.com/static/5513db4be4b02a4b04e3bfe4/5559fcdce4b0443afbf1a46b/5559fd58e4b0741e9bedc299/1431960929255/fleetster.png"
            }]
          },
          {
            title: "Contact Me",
            activePage:0,
            pages: [{
                    subtitle: "Contacts",
                    body:"Bot for ordering food",
                    coverPic:"https://d30y9cdsu7xlg0.cloudfront.net/png/415507-200.png"
                    }]
          }],action) => {
  return state;
}
export default sections;
