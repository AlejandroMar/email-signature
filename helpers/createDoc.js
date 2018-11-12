const createFile = (request) => {
    const page = `<!DOCTYPE html>
    <html style="font-family: Arial;font-weight: 400;color: #4c4c4c;font-size: 14px;">
        <head>
            <meta charset="utf-8">
            <title>Signatur</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
                html {
                    font-family: Arial;
                    font-weight: 400;
                    color: #4c4c4c;
                    font-size: 14px;
                }

                p {
                    margin: 4px 0;
                }

                .person-data {
                    margin-bottom: 26px;
                }

                .name {
                    color: #043144;
                    font-size: 18px;
                    margin: 0;
                }

                .name-label {
                }

                .contact {
                    margin-bottom: 15px;
                }

                .contact-table {
                    border-collapse: collapse;
                }

                .contact-table td, .contact-table td {
                    padding: 4px 0;
                    padding-right: 25px;
                    color: #043144;
                }

                .contact_link {
                    text-decoration: none;
                    color: #043144;
                }

                hr {
                    border: 0;
                    height: 2px;
                    width: 368px;
                    background-color: #ffef18;
                    margin: 0;
                    margin-bottom: 10px;
                }

                .logo-container {
                    margin-bottom: 6px;
                }

                .logo-table {

                }

                .logo-lux {

                }

                .logo-entega {
                    margin-top: 29px;
                    margin-left: 5px;
                }

                .address {
                    margin: 0;
                    padding: 0;
                }

                .address-label {
                    font-size: 10px;
                    line-height: 8px;
                }
            </style>
        </head>
        <body>
            <div class="person-data" style="margin-bottom: 26px;">
                <p class="name" style="margin: 0;color: #043144;font-size: 18px;">${request.name}</p>
                <p class="name-label" style="margin: 4px 0;">${request.job}</p>
            </div>

            <div class="contact" style="margin-bottom: 15px;">
                <table class="contact-table" style="border-collapse: collapse;">
                    <tr>
                        <td style="padding: 4px 0;padding-right: 25px;color: #043144;">phone</td>
                        <td style="padding: 4px 0;padding-right: 25px;color: #043144;"><a href="tel:+496151629420" class="contact_link" style="text-decoration: none;color: #043144;">${request.phone}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 4px 0;padding-right: 25px;color: #043144;">Fax</td>
                        <td style="padding: 4px 0;padding-right: 25px;color: #043144;">${request.fax}</td>
                    </tr>
                    <tr>
                        <td style="padding: 4px 0;padding-right: 25px;color: #043144;">Mail</td>
                        <td style="padding: 4px 0;padding-right: 25px;color: #043144;"><a href="mailto:${request.email}" class="contact_link" style="text-decoration: none;color: #043144;">${request.email}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 4px 0;padding-right: 25px;color: #043144;">Web</td>
                        <td style="padding: 4px 0;padding-right: 25px;color: #043144;"><a href="${request.site}" target="_blank" class="contact_link" style="text-decoration: none;color: #043144;">${request.site}</a></td>
                    </tr>
                </table>
            </div>
            <hr style="border: 0;height: 2px;width: 368px;background-color: #ffef18;margin: 0;margin-bottom: 10px;">
            <div class="logo-container" style="margin-bottom: 6px;">
                <table class="logo-table">
                    <tr>
                        <td><img class="logo-lux" src="https://luxstream.de/media/mail/luxstream.png" alt="Luxstream"></td>
                        <td><img class="logo-entega" src="https://luxstream.de/media/mail/entega.png" alt="Entega" style="margin-top: 29px;margin-left: 5px;"></td>
                    </tr>
                </table>
            </div>
            <p class="address" style="margin: 0;padding: 0;">LUXSTREAM GmbH, Hilpertstr. 16-18, 64295 Darmstadt</p>
            <p class="address-label" style="margin: 4px 0;font-size: 10px;line-height: 12px;">Geschäftsführung: Dipl.-Ing. (FH) Daniel San Jocić (Vorsitzender), Rolf Neubauer</p>
            <p class="address-label" style="margin: 4px 0;font-size: 10px;line-height: 8px;">Sitz und Registergericht Darmstadt HRB 87901</p>
        </body>
    </html>`;

    return page;
};

module.exports = createFile;
