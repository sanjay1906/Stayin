import packageJson from '../../package.json';

const config = {
  get PUBLIC_URL() {
    return process.env.PUBLIC_URL;
  },
  get SERVER_URL() {
    return process.env.REACT_APP_SERVER_URL;
  },
  get DEBUG() {
    return process.env.NODE_ENV !== 'production';
  },
  get NODE_ENV() {
    return process.env.NODE_ENV;
  },
  get VERSION() {
    return packageJson.version;
  },
  get FirebaseConfig() {
    return {
      apiKey: 'AIzaSyBmZKHlBZ84wRBX7truEovScviMVRZSe1Q',
      authDomain: 'stayin-92da5.firebaseapp.com',
      databaseURL: 'https://stayin-92da5.firebaseio.com',
      projectId: 'stayin-92da5',
      storageBucket: 'stayin-92da5.appspot.com',
      messagingSenderId: '87692184928',
      appId: '1:87692184928:web:f7ac93c04f2cf2121fe205'
    };
  }
};

export default config;
