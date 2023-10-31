export interface IDataPage {
  buttons: IButtons;
  id: string; // Uma string contendo um identificador único
  "info-main": {
    addIstagram: boolean; // Um valor booleano (true ou false)
    background: string; // Uma string representando uma cor em formato hexadecimal (#RRGGBB)
    instagram: string; // Uma string contendo uma conta do Instagram
    name: string; // Uma string contendo um nome
    resume: string; // Uma string contendo um resumo
    colorTextName: string; //Uma string com a cor do nome
    colorTextInstagram: string; //Uma string com a cor do nome
    colorTextResume: string; //Uma string com a cor do nome
    urlImage: string;
  };
  profile_picture: string; // Uma string contendo um URL de imagem
  "social-media": {
    discord: {
      active: boolean; // Um valor booleano (true ou false)
      link: string; // Uma string contendo um link para o Discord
    };
    facebook: {
      active: boolean; // Um valor booleano (true ou false)
      link: string; // Uma string contendo um link para o Facebook
    };
    instagram: {
      active: boolean; // Um valor booleano (true ou false)
      link: string; // Uma string contendo um link para o Instagram
    };
    linkedin: {
      active: boolean; // Um valor booleano (true ou false)
      link: string; // Uma string contendo um link para o LinkedIn
    };
    twitch: {
      active: boolean; // Um valor booleano (true ou false)
      link: string; // Uma string contendo um link para o Twitch
    };
    twitter: {
      active: boolean; // Um valor booleano (true ou false)
      link: string; // Uma string contendo um link para o Twitter
    };
    whatsapp: {
      active: boolean; // Um valor booleano (true ou false)
      link: string; // Uma string contendo um link para o WhatsApp
    };
  };
  username: string; // Uma string contendo um nome de usuário
}
