class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return this._password.replace(/./g, '*');
    }
  
    set password(newPassword) {
      if (newPassword.length < 8) {
        console.error('Password must be at least 8 characters long');
        return;
      }
  
      if (!/[0-9]/.test(newPassword)) {
        console.error('Password must contain at least one number');
        return;
      }
  
      if (!/[A-Z]/.test(newPassword)) {
        console.error('Password must contain at least one uppercase letter');
        return;
      }
  
      this._password = newPassword;
    }
  }
  
  // Instantiate an instance of the User class
  let user = new User('johnDoe', 'MyPassword123');
  
  // Get the password with asterisks
  console.log(user.password); // Output: ***********
  
  // Try to set an invalid password
  user.password = 'hort';
  // Output: Password must be at least 8 characters long
  
  // Try to set a password without a number
  user.password = 'MyPasswordABC';
  // Output: Password must contain at least one number
  
  // Try to set a password without an uppercase letter
  user.password = 'ypassword123';
  // Output: Password must contain at least one uppercase letter
  
  // Set a valid password
  user.password = 'MyNewPassword123';
  console.log(user.password); // Output: ***********