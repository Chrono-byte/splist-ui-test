import { createFileRoute } from '@tanstack/react-router';
import { LayoutContainer, LayoutFooter, LayoutHeader, LayoutMain } from '../-root/Layout';

export const Route = createFileRoute('/client/')({
    component: Index,
});

function Index() {
    return (
        <LayoutContainer>
            <LayoutHeader></LayoutHeader>
            <LayoutMain>Hello /client/!</LayoutMain>
            <LayoutFooter></LayoutFooter>
        </LayoutContainer>
    );
}
