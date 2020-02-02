const express = require('express');

const router = express.Router();
const Post = require('../models/Post');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/', (req, res) => {
    const { name, email, message } = req.body;
    const post = new Post({
        name,
        email,
        message
    });


    const msg = {
        to: 'agutilop@everis.com',
        from: email,
        subject: 'Sending with Twilio SendGrid is Fun',
        text: message,
        html: '<strong>' + message + '</strong>',
    };

    post.save(msg)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err });
        });
});

module.exports = router;