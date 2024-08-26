export function getTemplate1(contents) {
  return `
    <style>
        .email-container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 5px;
            overflow: hidden;
        }
        .email-header {
            background-color: #007BFF;
            padding: 20px;
            text-align: center;
        }
        .email-header img {
            width: 200px;
            margin: 5px auto;
            display: block;
        }
        .email-body {
            padding: 20px;
            font-size: 16px;
            color: #333333;
            line-height: 1.5;
        }
        .email-footer {
            background-color: #445566;
            padding: 20px;
            text-align: center;
            color: #ffffff;
        }
        .email-footer p {
            margin: 10px 0;
            font-size: 14px;
        }
        .email-footer a {
            margin: 0 10px;
            display: inline-block;
            text-decoration: none;
            color: #ffffff;
        }
        .email-footer img {
            width: 30px;
        }

        /* Responsive Styles */
        @media screen and (max-width: 600px) {
            .email-container {
                width: 100%;
                border-radius: 0;
            }
            .email-body {
                padding: 15px;
                font-size: 14px;
            }
            .email-footer {
                padding: 15px;
                font-size: 12px;
            }
            .email-footer img {
                width: 25px;
            }
        }
    </style>
    <table role="presentation" class="email-container">
        <tr>
            <td>
                <!-- Header -->
                <div class="email-header">
                    <img src="http://placehold.it/200x50" alt="logo">
                </div>
                <!-- Body -->
                <div class="email-body">
                    ${contents}
                </div>
                <!-- Footer -->
                <div class="email-footer">
                    <p>Follow us on social media.</p>
                    <a href="https://facebook.com">
                        <img src="https://www.mailjet.com/images/theme/v1/icons/ico-social/facebook.png" alt="facebook">
                    </a>
                    <a href="https://twitter.com">
                        <img src="https://www.mailjet.com/images/theme/v1/icons/ico-social/twitter.png" alt="twitter">
                    </a>
                    <a href="https://instagram.com">
                        <img src="https://www.mailjet.com/images/theme/v1/icons/ico-social/instagram.png" alt="instagram">
                    </a>
                    <p>© 2024 Your Company Name. All rights reserved.</p>
                </div>
            </td>
        </tr>
    </table>
`;
}
