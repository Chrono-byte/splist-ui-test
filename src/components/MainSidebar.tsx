import { Link } from '@tanstack/react-router';
import { GoHome, GoCodeSquare, GoGear, GoTelescope } from 'react-icons/go';
import { Avatar } from './Avatar';
import { LeftSidebar, LeftSidebarItem, LeftSidebarHr } from './LeftSidebar';

interface MainSidebarProps {
    remote?: string;
    homeLink: string;
    logsLink: string;
    settingsLink: string;
    clientLink: string;
    remoteLink: string;
}

export function MainSidebar({ remote, ...links }: MainSidebarProps) {
    return (
        <LeftSidebar title={remote ? `Remote ${remote}` : 'Splist Client'}>
            <Link to={links.homeLink} params={{ remote }} activeOptions={{ exact: true }}>
                {({ isActive }) => (
                    <LeftSidebarItem icon={<GoHome size={24} />} active={isActive}>
                        Home
                    </LeftSidebarItem>
                )}
            </Link>
            <Link to={links.logsLink} params={{ remote }}>
                {({ isActive }) => (
                    <LeftSidebarItem icon={<GoCodeSquare size={24} />} active={isActive}>
                        Logs
                    </LeftSidebarItem>
                )}
            </Link>
            <Link to={links.settingsLink} params={{ remote }}>
                {({ isActive }) => (
                    <LeftSidebarItem icon={<GoGear size={24} />} active={isActive}>
                        Settings
                    </LeftSidebarItem>
                )}
            </Link>
            <LeftSidebarHr />
            <Link to={links.clientLink} activeOptions={{ exact: true }}>
                {({ isActive }) => (
                    <LeftSidebarItem icon={<GoTelescope size={24} />} active={isActive}>
                        Splist Client
                    </LeftSidebarItem>
                )}
            </Link>
            {[1, 2, 3, 4, 5].map((it) => (
                <Link to={links.remoteLink} params={{ remote: it.toString() }}>
                    {({ isActive }) => (
                        <LeftSidebarItem key={it} icon={<Avatar sidebar color="orange" />} active={isActive}>
                            <span className="flex flex-col">
                                <span className="text-white text-sm">Remote {it}</span>
                                <span className="text-xs">@remote{it}</span>
                            </span>
                        </LeftSidebarItem>
                    )}
                </Link>
            ))}
        </LeftSidebar>
    );
}
