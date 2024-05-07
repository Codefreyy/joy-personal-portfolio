import { headers } from 'next/headers';
import { UAParser } from 'ua-parser-js';

export const isMobileDevice = () => {
    if (typeof process === 'undefined') {
        throw new Error('[Server method] you are importing a server-only module outside of server');
    }

    const { get } = headers();
    const ua = get('user-agent');

    const device = new UAParser(ua || '').getDevice();

    const isMobile = device.type === 'mobile';

    return isMobile;
};