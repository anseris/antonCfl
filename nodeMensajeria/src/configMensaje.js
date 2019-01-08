const nodemailer = require('nodemailer');

module.exports = (formulario) => {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'anseris51@gmail.com', // Cambialo por tu email
      pass: 'cefilus8' // Cambialo por tu password
    }
  });
  console.log(formulario)

  const mailOptions = {
    from: `"${formulario.nombre} 👻" <${formulario.email}>`,
    to: 'anseris51@gmail.com', // Cambia esta parte por el destinatario
    subject: formulario.asunto,
    html: `
    <strong>Nombre:</strong> ${formulario.nombre} <br/>
    <strong>E-mail:</strong> ${formulario.email}  <br/>
    <strong>Mensaje:</strong> ${formulario.mensaje}
    `
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });
}
