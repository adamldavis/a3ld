
const _2mail = {
    loggedIn: false,
    username: null,
    messages: [],
    reset: function() {
        document.getElementById('inbox').style.display='none';
        document.getElementById('new_mail').style.display='none';
        document.getElementById('mail').style.display='none';
    },
    showMail: function(id) {
        this.id = id;
        let mail = this.messages.find((m) => m.id === id);
        this.reset();
        document.getElementById('mail').style.display='';
        document.getElementById('mail_text').innerHTML = '<pre>'  + mail.text + '</pre>';
        document.getElementById('mail_from').innerHTML = '<pre>'  + mail.from + '</pre>';
        document.getElementById('mail_date').innerHTML = '<pre>'  + mail.date + '</pre>';
        return false;
    },
    newMail: function() {
        this.reset();
        document.getElementById('id').value= this.randomId();
        document.getElementById('to').value='';
        document.getElementById('text').value='';
        document.getElementById('new_mail').style.display='';
    },
    cancel: function() {
        this.reset();
        document.getElementById('inbox').style.display='';
        document.getElementById('to').value='';
        document.getElementById('text').value='';
        this.load();
    },
    send: function() {
        let to = document.getElementById('to').value;
        let text = document.getElementById('text').value;
        let ttl = document.getElementById('ttl').value;

        //TODO SEND!
        this.flash.innerHTML = ("Message sent to " + to + " with " + text + " ttl=" + ttl);
        this.cancel();
    },
    load: function() {
        _2mail.flash = document.getElementById('flash');
        let inbox = document.getElementById('inbox');
        let messages = [{"id": 'abc', "from": "Frank", "date": "2020-06-22", "text": "Hi,\n\nWhat's up? I heard you were throwing a party for me?\n"}]; // TODO: GET
        _2mail.messages = messages;
        let html = '<ul>';

        messages.forEach((message) => {
            html += `<li><a href="#" onclick="_2mail.showMail(\'${message.id}\')">Hi there!</a></li>`;
        });
        html += '</ul><button class="send" onclick="_2mail.newMail()">Send</button>';
        inbox.innerHTML = html;
    },
    reply: function() {
        let id = this.id;
        let mail = this.messages.find((m) => m.id === id);
        this.reset();
        document.getElementById('id').value= id;
        document.getElementById('to').value= mail.from;
        document.getElementById('text').value= '>Reply';
        document.getElementById('new_mail').style.display='';
    },
    randomId: function() {
        return Math.random().toString(36).replace(/[^a-z]+/g, '');
    },
}
