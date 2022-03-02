      //console.log(`You will be a ${jobTitle} in ${geoLocation} and married to ${partnerName} with ${numberChildren} kids`);
    
        let greeting="Hello!";
        let name="Savannah";
        let age="25";
        let city="San Diego";
        let state="California";
        let marritalStatus="Husband";
        let pet="dog";
        let branch="Air Force";
        let occupation="student";
        let school="SDGKU";
        let schoolLocation="San Diego";
        let course="Full Stack Development Immersive";
        let courseLength="30 weeks";
        let unit="JavaScript";
        let previousUnit="CSS & HTML";
        let goal="Full Stack web developer";
        let emotion="enjoyed";
        let favoriteUnit="CSS";
        let leastFav="JavaScript";
        let challenge="challenging";

        let template=`${greeting} My name is ${name}, I am ${age} and I live in ${city}, ${state} with my ${marritalStatus} and ${pet}. I was previously in the ${branch} and now I am a ${occupation} at ${school} located in ${schoolLocation} enrolled in the ${course} course. The class is approximately ${courseLength} long and we are currently learning ${unit}. Last week we learned about ${previousUnit}. The goal of this course is to learn how to become a ${goal}. So far I have ${emotion} practicing ${favoriteUnit} while ${leastFav} has been the most ${challenge}.
        `;

      console.log(template);
      document.write(template);
