import { headers } from 'next/headers';
import { UAParser } from 'ua-parser-js';

export const isMobileDevice = (): boolean => {
    try {
        const { get } = headers();
        const ua = get('user-agent');

        const device = new UAParser(ua || '').getDevice();
        return device.type === 'mobile';
    } catch (error) {
        console.error('Failed to detect mobile device from headers:', error);
        return false;
    }
};