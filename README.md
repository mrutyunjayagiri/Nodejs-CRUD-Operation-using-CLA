# Nodejs CRUD Using Command Line Args

Hi! The goal of the repository is to provide the nodejs crud operations by using **command line arguments** and storing data into the json file by using file systems.



# dependencies
   **"chalk": "^3.0.0"**,
    **"yargs": "^15.1.0"**

### *chalk*
Chalk comes with an easy to use composable API where you just chain and nest the styles you want. For documentation follow [documentation](https://www.npmjs.com/package/chalk).

### *yargs*
Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface. For documentation follow [documentation](https://www.npmjs.com/package/yargs).

## CRUD 
You can perform the crud operations through command line args.
**1. create note**

> node app.js add --title="Note Create" --body="Note body created"

In the above command ** app.js** is the entry file, **add** is the event, **--title** is the title of the note, **--body** is the body of the note.

![Create Note ](https://firebasestorage.googleapis.com/v0/b/mywebsite-6b38e.appspot.com/o/Github%20Projects%2FNodeJs%20CRUD%20using%20CLA%2Fcreate.png?alt=media&token=c22bbc35-feac-4698-acae-9b8ca642ee1e)


**2. read note**

> node app.js read --title="Note Create"  

In the above command ** app.js** is the entry file, **read ** is the event, **--title** is the title of the note considering as unique.

![Read Note ](https://firebasestorage.googleapis.com/v0/b/mywebsite-6b38e.appspot.com/o/Github%20Projects%2FNodeJs%20CRUD%20using%20CLA%2Fread.png?alt=media&token=9b8db2e4-89eb-42de-b4b5-44d4c04a4abd)

**3. update note**

> node app.js update --title="Note Create" --updatedTitle="Note Title Updated" --updatedBody="Note Body Updated"

In the above command ** app.js** is the entry file, **update ** is the event, **--title** is the title of the note considering as unique and **updatedTitle** and **updatedBody** are two optional parameters to be updated to the field of the note title and body respectively.

![Update Note ](https://firebasestorage.googleapis.com/v0/b/mywebsite-6b38e.appspot.com/o/Github%20Projects%2FNodeJs%20CRUD%20using%20CLA%2Fupdate.png?alt=media&token=33947502-6bb2-47ad-92c1-79c28a50179c)


**4. delete note**

> node app.js remove --title="Note Title Updated"

In the above command ** app.js** is the entry file, **remove ** is the event, **--title** is the title of the note considering as unique. It will remove the note item where title will be matched.

![Remove Note ](https://firebasestorage.googleapis.com/v0/b/mywebsite-6b38e.appspot.com/o/Github%20Projects%2FNodeJs%20CRUD%20using%20CLA%2Fdelete.png?alt=media&token=9f88e63a-2c52-49f5-9482-6ec15f045345)

**5. list of notes**

> node app.js list

In the above command ** app.js** is the entry file, **list** is the event. It will retrieve all the notes present in the file.

![Remove Note ](https://firebasestorage.googleapis.com/v0/b/mywebsite-6b38e.appspot.com/o/Github%20Projects%2FNodeJs%20CRUD%20using%20CLA%2Flist.png?alt=media&token=25e561fc-e480-416e-92b4-671ce7f7aa0e)
	




**Happy Coding**


