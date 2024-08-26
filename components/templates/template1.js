export function getTemplate1(contents) {
  return `
    <table role="presentation" style="width:100%;background-color:#007BFF;padding:20px 0;">
        <tr>
            <td style="text-align: center;">
                <img src="http://placehold.it/200x50" alt="logo" style="width: 200px; margin: 5px auto;">
            </td>
        </tr>
    </table>
    
    <table role="presentation" style="width:100%;background-color:#ffffff;padding:20px;margin:20px auto;">
        <tr>
            <td style="font-size:16px;color:#333333;font-family:Roboto, Arial, sans-serif;padding:20px;">
                ${contents}
            </td>
        </tr>
    </table>

    <table role="presentation" style="width:100%;background-color:#445566;padding:20px;margin-top:20px;">
        <tr>
            <td style="text-align:center;color:#ffffff;font-size:14px;">
                Follow us on social media.
            </td>
        </tr>
        <tr>
            <td style="text-align:center;padding:10px 0;">
                <a href="https://facebook.com" style="font-size:15px;margin:0 10px;display:inline-block;text-decoration:none;color:#3b5998;">
                    <img src="https://www.mailjet.com/images/theme/v1/icons/ico-social/facebook.png" alt="facebook" style="width:30px;">
                </a>
                <a href="https://twitter.com" style="font-size:15px;margin:0 10px;display:inline-block;text-decoration:none;color:#55acee;">
                    <img src="https://www.mailjet.com/images/theme/v1/icons/ico-social/twitter.png" alt="twitter" style="width:30px;">
                </a>
                <a href="https://instagram.com" style="font-size:15px;margin:0 10px;display:inline-block;text-decoration:none;color:#e1306c;">
                    <img src="https://www.mailjet.com/images/theme/v1/icons/ico-social/instagram.png" alt="instagram" style="width:30px;">
                </a>
            </td>
        </tr>
        <tr>
            <td style="text-align:center;color:#ffffff;font-size:12px;padding-top:10px;">
                © 2024 Your Company Name. All rights reserved.
            </td>
        </tr>
    </table>
`;
}
