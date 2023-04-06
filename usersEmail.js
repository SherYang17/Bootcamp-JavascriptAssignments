
let appData = {
    name: "Gmail",
    mailboxes: [
      {
        mailboxname: ["inbox", "sent", "drafts", "spam"],
        howmanyemails: "155",
        emailsunread: "20",
        emailsread: "135",
        name: "Inbox",
        emails: [
          { from: "Elizabeth", to: "Sher", subject: "Hi Sher! - First Body", body: "Hey! This is the first body to take up some space. Nothing needs to go here." },
          { from: "Alexa", to: "Sher", subject: "Hi Sher! - Second Body", body: "Hey! This is Alexa and this is the 2nd body. Nothing needs to go here." },
          { from: "Kelan", to: "Sher", subject: "Hi Sher! - Third Body", body: "Hey! This is the third body. Nothing needs to go here." },
          { from: "Ong", to: "Sher", subject: "Hi Sher! - Fourth Body", body: "Hey! This is the Fourth body. Nothing needs to go here." }
        ]
      },
      //this is a different mailbox, this is a sent mailbox
      {
        name: "Sent",
        emails: [
          { from: "Sher", to: "test", subject: "Sent First Email", body: "Sent first email" },
          { from: "Sher", to: "test", subject: "Sent Second Email", body: "Sent second body" }
        ]
      },
      //this is a different mailbox, this is drafts, do I need count of how many??
      {
        name: "drafts",
        emails: [
          { from: "", to: "", subject: "", body: "" }
        ]
      } // line 27 bracket
    ] // line 4 bracket
  }; //line 2 bracket


  let draftEmail = {
    from: "from test",
    to: "to test",
    subject: "subject test",
    body: "body test"
};




// // Get a list of mailbox names
console.log("1. List of Mailbox names: ",appData.mailboxes[0].mailboxname.join(", "));

// // Get a list of emails
console.log("2. List of emails: ", appData.mailboxes[0].emails);

// // // Get the text of the second email in the visible list
console.log("3. Text of second email: ", appData.mailboxes[0].emails[1]);

// //  Mark an email as sent
// appData.mailboxes[1].status = "Marked Sent";
console.log("4. This is marked sent: ", appData.mailboxes[1]);

// // // Add a draft email to the drafts mailbox
appData.mailboxes[2].emails.push(draftEmail);
console.log("5. This sends the draft email to drafts mailbox: ", appData.mailboxes[2].emails);