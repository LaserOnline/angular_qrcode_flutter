export class PathApi {
  ip = '192.168.1.71';
  header: string =
    'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4MTU0MDk3MiwiaWF0IjoxNjgxNTQwOTcyfQ.i-XcD6WIhQZ2V9fGvwiigJt4b5HktQTa4JS0G1UzYWY';
  api_path_register: string = `http://${this.ip}/apache/PHP-Backend-Angukar-Flutter-JWT/src/lib/register/register.php`;
  api_path_login: string = `http://${this.ip}/apache/PHP-Backend-Angukar-Flutter-JWT/src/lib/login/login.php`;
  api_path_reset: string = `http://${this.ip}/apache/PHP-Backend-Angukar-Flutter-JWT/src/lib/reset_pass/reset_pass.php`;
  api_path_generateqrcode: string = `http://${this.ip}/apache/PHP-Backend-Angukar-Flutter-JWT/src/lib/GenerateQrCode/GenerateQrCode.php`;
  api_path_upload_profile: string = `http://${this.ip}/apache/PHP-Backend-Angukar-Flutter-JWT/src/lib/profile/profile.php`;
}
