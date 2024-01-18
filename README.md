# Message Broadcasting service
<div>This is a small project that takes message from the user and sends it to the provided number. The message can be sent in the form of a <b>SMS</b>, a <b>WHATSAPP</b> text or a <b>CALL</b>. The project is made using technologies like <u>React.js</u> and <u>Django</u>. The frontend is user friendly and can be used for sending messages and viewing the records of the messages sent before where as the backend contains mainly of four api's that cen be use for the above tasks.
</div>
<h3 >

 🔧 Installation and setup :
 - Django==5.0.1 (recomended)
 - Firstly, clone the repository.
 - Then navigate to backend

```bash
# Create a virtual environment
py -m venv _name_of_virtual_environment_ (Windows)
python -m venv _name_of_virtual_environment_ (Unix/MacOS)

# Activate the virtual environment
_name_of_virtual_environment_\Scripts\activate (Windows)
source _name_of_virtual_environment_/bin/activate (Unix/MacOS)

# Install requirements
pip install -r requirements.txt

# Create migration file
py manage.py makemigrations 

# Create table in database 
py manage.py migrate


# Run the backend
py manage.py runserver
```

- Then navigate to the frontend
```bash
# Install dependencies
npm install

# Run the development server
npm start
```
- The project is set up successfully. 


</h3>
<br>
<br>

# About the project :

<div>
<h3>Backend :</h3>
<div>
The backend is made using <u>Django</u>. It mainly consists of four api's whose endpoints are as follows :


```
1. ['POST'] http://127.0.0.1:8000/sms/ 

    body:{
        phoneNumber:'target phone number',
        content: 'target content'
    }

2. ['POST'] http://127.0.0.1:8000/whatsapp/ 

    body:{
        phoneNumber:'target phone number',
        content: 'target content'
    }

3. ['POST'] http://127.0.0.1:8000/call/ 

    body:{
        phoneNumber:'target phone number',
        content: 'target content'
    }

4. ['GET'] http://127.0.0.1:8000/records/ 

    response:{
        {
        "id": record_id,
        "fromNumber": "+17603878981",
        "toNumber": "target_phone_number",
        "content": "target _content",
        "type": "type_of_mode",
        "created_at": "date_and_time"
        }
        .......
    }

    This api gets all the records of the messages successfully sent .
```
</div>
<h3>Frontend :</h3>
<div>
The frontend consists of two main parts. The first one being the form that takes the inputs and lets the user send the desired message to the given contact number using any of the given modes preferred. The Second part is a table that diaplays the record of the messages sent.
</div>
</div>