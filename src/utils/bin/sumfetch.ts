import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  
             @@@@@@@@@@@@@                   sumfetch: summary display
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@      @@@                @@@     @@       <u><a href="${config.resume_url}" target="_blank">Resume</a></u>
@@                                   @@      <u><a href="${config.main_site}" target="_blank">Main Site</a></u>
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   @@             @@@@@@          @@         <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
     @@@                        @@@         -----------
        @@@                  @@@ @@          DONATE 
         @|  @@@@@@@@@@@@@@@@   @@           <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
         @|                      @@          <u><a href="${config.donate_urls.donatepage}" target="_blank">${config.donate_urls.donatepage}</a></u>

`;
  } else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  sumfetch
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${config.resume_url}" target="_blank">Resume</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       -----------
▐▓        > Ryan Hindman           ▐▓        CONTACT 
▐▓                                 ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             DONATE 
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀                <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                   <u><a href="${config.donate_urls.donatepage}" target="_blank">${config.donate_urls.donatepage}</a></u>

                                            -----------
                                             Other Site
                                             <u><a href="${config.main_site}" target="_blank">Portfolio Site</a></u>
                                             <u><a href="${config.status_site}" target="_blank">Status Page</a></u>
`;
  }
};

export default sumfetch;
