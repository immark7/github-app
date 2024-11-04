import { Avatar } from "../../components/ui/avatar/Avatar";
import { GitHubUser } from "../../libs/types";

export const USER_COLUMNS = [
  {
    header: "User",
    key: "login",
    className: "min-w-52",
    render: (value: string, user: GitHubUser) => (
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 font-medium"
      >
        <Avatar src={user.avatar_url} />
        <span>{value}</span>
      </a>
    ),
  },
  {
    header: "Type",
    key: "type",
  },
  {
    header: "Score",
    key: "score",
    render: (value: number) => <span>{value * 100}</span>,
  },
];
