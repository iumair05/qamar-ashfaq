import { v4 as uuidv4 } from 'uuid';

export const projectsData = [
    {
        id: uuidv4(),
        images: [
            "/project/imlink/1.jpg",
            "/project/imlink/2.png",
            "/project/imlink/3.jpg",
            "/project/imlink/4.png",
            "/project/imlink/5.png"
        ],
        title: "imlink.network",
        description: "Link is the first Saudi social media super app designed to connect friends, families, peers, and individuals from all walks of life",
        url: "https://imlink.network/",
        tools: ['Python', 'Django', 'Django Rest', 'Fast API', "PostgreSQL", "Microservices", 'celery', 'redis', "Lambda Function", "Serverless", "ML", "AI", 'Docker' , 'Kubernetes'],
        challenge: "Integrating a wide range of microservices while ensuring seamless communication between them was a complex task. Using Docker and Kubernetes helped manage containerized services efficiently, but it required careful orchestration and monitoring."
    },
    {
        id: uuidv4(),
        images: [
            "/project/character-strong/1.png",
            "/project/character-strong/2.png",
            "/project/character-strong/3.png",
            "/project/character-strong/4.png",
            "/project/character-strong/5.png"
        ],
        title: "characterstrong.com",
        description: "Character Strong.org builds a future where honest, trustworthy, respectful people treat others as they want to be treated. character strong’s lessons are designed to improve both classroom and school climate by providing a more positive inclusive environment that helps students feel safe and connected. It is character building platform for teenagers to boost their social interaction for mental health. We had to manage the scalability challenge of this website. We used the Pulumi platform services for managing this scalability.",
        url: "https://characterstrong.com/",
        tools: ['HTML', 'CSS', 'JavaScript', 'TypeScript', "React", "Redux", 'Node JS', "Express JS", "Lambda Function", "Serverless",'Quickbooks', "DynamoDB",'Microfrontends'],
        challenge: "Ensuring scalability to handle a growing number of users was crucial. Implementing serverless architecture with Lambda Functions and managing infrastructure with Pulumi was essential to meet the demand without compromising performance."
    },
    {
        id: uuidv4(),
        images: [
            "/project/cloud-equate/1.png",
            "/project/cloud-equate/2.png",
            "/project/cloud-equate/3.png",
            "/project/cloud-equate/4.png",
            "/project/cloud-equate/5.png"
        ],
        title: "cloudequate.com",
        description: "Find top vendors with Cloud equate gcp, azure and aws",
        url: "https://cloudequate.com/",
        tools: ['HTML', 'CSS', 'JavaScript', 'TypeScript', "React", "Redux", "GraphQl", 'Node JS', 'Bootstrap', "Express JS",  "PostgreSql" , 'Sequelize'],
        challenge: "Managing real-time data interactions and ensuring quick load times for users required an efficient backend. Implementing GraphQL with React and Redux, while maintaining data consistency with PostgreSQL and Sequelize, posed a significant challenge."
    },
    {
        id: uuidv4(),
        images: [
            "/project/share-slate/1.png",
            "/project/share-slate/2.png",
            "/project/share-slate/3.png",
            "/project/share-slate/4.png",
            "/project/share-slate/5.png"
        ],
        title: "www.shareslate.fun",
        description: "Unleash your creativity through videos and minis, showcasing your unique expression",
        url: "https://www.shareslate.fun/",
        tools: ['JavaScript', 'TypeScript', "React", 'React Native', "Redux", 'Node JS', 'Bootstrap', "Express JS", "Lambda Function", "Serverless", "ML", "AI", "MongoDB", 'AWS' , 'Stripe','InApp Purchase'],
        challenge: "Building a platform that supports both video content and micro-interactions was challenging. Ensuring smooth integration of AI and ML features with video processing required a robust infrastructure supported by MongoDB and AWS services."
    },
    {
        id: uuidv4(),
        images: [
            "/project/mytutor/1.png",
            "/project/mytutor/2.png",
            "/project/mytutor/3.png",
            "/project/mytutor/4.png",
            "/project/mytutor/5.png"
        ],
        title: "www.mytutor.co.uk",
        description: "Tutor online is a global online teaching website/platform where both tutors and students belong to different countries. any tutor living in his/her homeland can teach worldwide and students can learn any subject living in his/her homeland through worldwide tutors. Tutor online is a teaching platform where students hire a tutor to learn a specific subject. we added a video call feature during lectures, whiteboard, chatting, and slot booking from different time zones and check-out methods.",
        url: "https://www.mytutor.co.uk/",
        tools: ['HTML', 'CSS', 'JavaScript', 'TypeScript', "React", "Redux", 'Node JS', 'Bootstrap', "Nest.js",'TypeORM' , "PostgreSQL",'Stripe Payments', 'Paypal Payments','Zoom Integration','Twilio','Sendgrid'],
        challenge: "Incorporating real-time video calls, whiteboard functionality, and chat features across different time zones required robust backend support. Integrating third-party services like Zoom, Twilio, and payment gateways like Stripe and PayPal added complexity to the project."
    },
    {
        id: uuidv4(),
        images: [
            "/project/bring-fresh/1.png",
            "/project/bring-fresh/2.png",
            "/project/bring-fresh/3.png",
            "/project/bring-fresh/4.png",
            "/project/bring-fresh/5.png"
        ],
        title: "bringfresh.eu",
        description: "Bring fresh is an online grocery application platform where the user can select grocery items and pay the bill online then the user can avail of the home delivery facility. It is a German-based grocery mobile app. One of the biggest challenges was that the existing UI lacks a user-friendly interface, so we upgraded the technology to React. native. We revamped its complete front end from an old one to a new one.",
        url: "https://bringfresh.eu/",
        tools: [ 'JavaScript', 'TypeScript', "React", 'React Native', "Redux", "Python", 'Django', 'Django Rest' , "PostgreSQL" , 'Microsoft Azure' , 'Azure Blob','Paypal'],
        challenge: "Revamping the entire frontend to improve the user interface while ensuring compatibility with existing backend services was challenging. Transitioning to React Native and integrating payment methods like PayPal required careful coordination and testing."
    }, 
    {
        id: uuidv4(),
        images: [
            "/project/assetize/1.png",
            "/project/assetize/2.png",
            "/project/assetize/3.png",
            "/project/assetize/4.png",
            "/project/assetize/5.png"
        ],
        title: "www.assetize.today",
        description: "Non-dilutive funding matching your growth in real-time",
        url: "https://www.assetize.today/",
        tools: ['HTML', 'CSS', 'JavaScript', 'TypeScript', "React", "Redux", 'Node JS', 'Bootstrap', "Nest JS", 'TypeORM', "PostgreSQL"],
        challenge: "Developing a real-time funding platform that can handle dynamic data and user interactions required efficient state management. Using Redux with React and ensuring data integrity with PostgreSQL and TypeORM was a key challenge."
    },
    {
        id: uuidv4(),
        images: [
            "/project/shareslate/1.png",
            "/project/shareslate/2.png",
            "/project/shareslate/3.png",
            "/project/shareslate/4.png",
            "/project/shareslate/5.png"
        ],
        title: "dev.shareslate.io",
        description: "Best project management software. Use Timeline to plan projects right the first time",
        url: "https://dev.shareslate.io/",
        tools: ['HTML', 'CSS', 'JavaScript', 'TypeScript', "React", "Redux", 'Node JS', 'Bootstrap', "Express JS", "Lambda Function", "MongoDB" , 'Stripe'],
        challenge: "Implementing a project management tool with a timeline feature demanded precise synchronization of tasks and events. Ensuring real-time updates and handling large datasets with MongoDB and serverless functions posed significant challenges."
    },
    {
        id: uuidv4(),
        images: [
            "/project/rishta-natta/1.png",
            "/project/rishta-natta/2.png",
            "/project/rishta-natta/3.png",
            "/project/rishta-natta/4.png",
            "/project/rishta-natta/5.png"
        ],
        title: "www.rishtanatta.com",
        description: "Rishta Natta matrimonial app is about to find your ideal partner online",
        url: "https://www.rishtanatta.com/",
        tools: ['JavaScript', "React", "Redux", 'Node JS', 'Bootstrap', "Express JS", "PostgreSQL" , 'Payments'],
        challenge: "Creating a secure and efficient matrimonial platform that handles sensitive user data required robust security measures. Integrating payment solutions and ensuring smooth user interactions with PostgreSQL and Express JS was a major challenge."
    },

    {
        id: uuidv4(),
        images: [
          "/project/wg-fab/1.png",
          "/project/wg-fab/2.png",
          "/project/wg-fab/3.png",
          "/project/wg-fab/4.png",
          "/project/wg-fab/5.png"
        ],
        title: "www.wgfabricators.com",
        url: "http://portal.wg-fab.com/",
        description: "This project integrates inventory management, ShipStation for shipping, and QuickBooks for accounting. It allows users to create and edit customer invoices, manage customer data, and view order history seamlessly. Designed to streamline business operations, this solution enhances efficiency and productivity for users.",
        tools: ["HTML", "CSS", "MUI", "JavaScript", "React", "Redux Toolkit", "Formik", "Yup", "Node.js", "Express", "MySQL", "QuickBooks", "InFlow", "ShipStation"],
        challenge: "One of the primary challenges was creating a seamless integration with accounting software (QuickBooks) and inventory management tools (InFlow, ShipStation). Ensuring real-time data sync between different systems and handling complex fabrication workflows required an efficient and scalable backend. Another challenge was providing a user-friendly interface that simplifies the intricate tasks involved in fabrication management."
      },
    {
        id: uuidv4(),
        images: [
            "/project/micheal-jacko/1.png",
            "/project/micheal-jacko/2.png",
            "/project/micheal-jacko/3.png",
            "/project/micheal-jacko/4.png",
            "/project/micheal-jacko/5.png"
        ],
        title: "www.michaelkjaco.com",
        url: "http://iwc-tv.michaelkjaco.com/",
        description: "A client website for a former U.S. Navy veteran offering online courses on becoming an Intuitive Warrior. The site features live streaming for real-time coaching sessions, event registration for both virtual and in-person events, and a shop selling powerful products to enhance personal growth. Users can engage with courses, join events, and purchase exclusive products.",
        tools: ["HTML", "CSS", "JavaScript", "React", "Swiper JS", "PWA", "Node.js", "Express", "MySQL", "AWS Kinesis"],
        challenge: "Building a reliable video streaming platform that can handle large volumes of traffic and provide real-time video playback was a key challenge. Additionally, ensuring seamless integration of payment gateways, managing premium content access, and implementing machine learning for personalized content recommendations required a robust and scalable backend infrastructure."
    }


];
