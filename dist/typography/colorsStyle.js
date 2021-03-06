import pulseColors from '@pulse/colors/colors.json';
const pulse = pulseColors.light;
export const colors = {
    black: pulse.simpleBlack,
    white: pulse.simpleWhite,
    error: pulse.systemError,
    grays: {
        bgTertiary: pulse.bgTertiary,
        bgSecondary: pulse.bgSecondary,
        background: pulse.tag11,
        disable: pulse.iconsDisabled,
        border: pulse.cardStroke,
        text: pulse.textSecondary,
        icon: pulse.iconsSecondary,
        fieldDisable: '#EEEEF1',
        separator: pulse.linesSeparator,
        linesChevron: pulse.linesChevron,
    },
    tags: {
        tags01: pulse.tag01,
        tags02: pulse.tag02,
        tags04: pulse.tag04,
        tags03: pulse.tag03,
        tags05: pulse.tag05,
        tags06: pulse.tag06,
        tags07: pulse.tag07,
        tags08: pulse.tag08,
        tags09: pulse.tag09,
    },
    systemAdd: pulse.systemSuccess,
    yellow: pulse.systemWarning,
    white08: 'rgba(255, 255, 255, 0.8)',
    dynamicGrowth02: 'rgba(133, 221, 155, 0.2)',
    dynamicDisableOrNothing: pulse.dynamicDisable,
    tertiary: pulse.textTertiary,
    ...pulse,
};
