export class ResponseAccessDto {
  id: string;
  name: string;
  url: string;
  panelUser: string | null;
  panelPassword: string | null;
  dbUser: string | null;
  dbPassword: string | null;
  ftpHost: string | null;
  ftpUser: string | null;
}

export default ResponseAccessDto;
