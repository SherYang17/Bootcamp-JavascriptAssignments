// Create a class of `Job` with the following properties: name, industry, requiresDegree, field, anyOtherRelevant
// Create methods: getName(), getFieldAndIndsutry(), anyOtherRelevant()

class Job {
  constructor(name, industry, requiresDegree, field, company) {
    this.name = name;
    this.industry = industry;
    this.requiresDegree = requiresDegree;
    this.field = field;
    this.company = company;
  }

  getName() {
    return this.name;
  }

  getFieldAndIndustry() {
    return this.industry + " & " + this.field;
  }

  getrequiresDegree() {
    return this.requiresDegree;
  }
}

// create three different instances of the Job class
// console log any 2 methods for each instance of the class
const jobOne = new Job("Cashier", "Restaurant", false , "Food and Services", "McDonald's");
console.log("The First job name is: " + jobOne.getName());
console.log("The first job field is: " + jobOne.getFieldAndIndustry());

const jobTwo = new Job("Software Developer", "Technology", true , "Development", "Microsoft");
console.log("The Second Job name is: " + jobTwo.getName());
console.log("The Second Job requires degree: " + jobTwo.getrequiresDegree());

const jobThree = new Job("Manufacturing Associate", "Warehouse", false , "Manufacturing", "Tyson Chicken");
console.log("The Third job name is: " + jobThree.getName());
console.log("The Third Job field is: " + jobThree.getFieldAndIndustry());


// create an instance of the extended class
class remoteJob extends Job {
  constructor(name, industry, requiresDegree, field, company, isRemote, location, state, jobType) {
    super(name, industry, requiresDegree, field, company);
    this.isRemote = isRemote;
    this.location = location;
    this.state = state;
    this.jobType = jobType;
  }

  getIsRemote() {
    return this.isRemote;
  }

  getLocation() {
    return this.location;
  }

  getanotherFieldTwo() {
    return this.anotherFieldTwo;
  }
}

const remoteJobOne = new remoteJob("Software Engineer", "Technology", true, "API's", "anyOtherRelevant", true, "CTAC", "Remote", "NC", "Full-Time");
console.log("The Remote Job, is it remote?: " + remoteJobOne.getIsRemote());
console.log("The Remote Job, the location is: " + remoteJobOne.getLocation());

