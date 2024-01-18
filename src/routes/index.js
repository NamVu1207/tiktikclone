import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

const PublicRoutes = [
    { path: '/tiktikclone/', component: Home },
    { path: '/tiktikclone/Following', component: Following },
    { path: '/tiktikclone/:nickname', component: Profile },
    { path: '/tiktikclone/Upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { PublicRoutes, privateRoutes };
