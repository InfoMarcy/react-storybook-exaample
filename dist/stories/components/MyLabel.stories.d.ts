/// <reference types="react" />
declare const meta: {
    title: string;
    component: ({ allCaps, color, label, size, fontColor, }: import("../../components/MyLabel").MyLabelProps) => JSX.Element;
    tags: string[];
    argTypes: {
        color: {
            control: string;
        };
        fontColor: {
            control: string;
        };
    };
};
export default meta;
export declare const Basic: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("../../components/MyLabel").MyLabelProps>;
export declare const AllCaps: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("../../components/MyLabel").MyLabelProps>;
export declare const Secondary: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("../../components/MyLabel").MyLabelProps>;
export declare const Terciary: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("../../components/MyLabel").MyLabelProps>;
export declare const CustomFontColor: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("../../components/MyLabel").MyLabelProps>;
