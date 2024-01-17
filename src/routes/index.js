import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

const PublicRoutes = [
    { path: '/', component: Home },
    { path: '/Following', component: Following },
    { path: '/:nickname', component: Profile },
    { path: '/Upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { PublicRoutes, privateRoutes };
