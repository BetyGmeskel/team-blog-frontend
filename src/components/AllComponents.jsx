import React from "react";
import { useReducer } from "react";

// ImgSport Component
export const ImgSport = ({ className }) => {
    return (
        <div
            className={`w-[1920px] h-[1280px] bg-[url(https://c.animaapp.com/xP4Dad95/img/unsplash-dp6i0grblty.png)] bg-cover bg-[50%_50%] ${className}`}
        />
    );
};

// ImgAvatar Component
export const ImgAvatar = ({ className }) => {
    return (
        <div
            className={`w-[1920px] h-[1920px] bg-[url(https://c.animaapp.com/xP4Dad95/img/unsplash-zhvm3xiohoe.png)] bg-cover bg-[50%_50%] rounded-lg ${className}`}
        />
    );
};

// IconFree Component
export const IconFree = ({
    iconName = "smile",
    style,
    padding,
    scale,
    className,
    iconClassName,
}) => {
    return (
        <div
            className={`items-center justify-center relative ${scale === "one-x" ? "w-6" : ""} ${scale === "one-x" ? "flex" : (padding === "none") ? "inline-flex" : ""} ${scale === "one-x" ? "h-6" : (padding === "none") ? "h-5" : ""} ${className}`}
        >
            <div
                className={`[font-family:'Font_Awesome_6_Free-Regular',Helvetica] tracking-[0] text-[#193154] font-normal text-center leading-[normal] relative ${scale === "one-x" ? "w-4" : (padding === "none") ? "w-5" : ""} ${padding === "none" ? "mt-[-1.00px]" : ""} ${scale === "one-x" ? "text-base" : (padding === "none") ? "text-xl" : ""} ${padding === "none" ? "h-[19px]" : ""} ${padding === "none" ? "whitespace-nowrap" : ""} ${iconClassName}`}
            >
                {iconName}
            </div>
        </div>
    );
};

// CardIcon Component
export const CardIcon = ({ size, action, type, className }) => {
    const [state, dispatch] = useReducer(reducer, {
        size: size || "small",
        action: action || "hover",
        type: type || "simple",
    });

    return (
        <div
            className={`inline-flex items-start relative ${className}`}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
        >
            <IconFree
                className="!flex-[0_0_auto]"
                iconClassName={
                    state.type === "hover" ? "!text-primary" : "!text-black-50"
                }
                iconName=""
                padding="none"
                scale="one-hundred-and-twenty-five-x"
                style="regular"
            />
        </div>
    );
};

function reducer(state, action) {
    switch (action) {
        case "mouse_enter":
            return {
                ...state,
                type: "hover",
            };

        case "mouse_leave":
            return {
                ...state,
                type: "simple",
            };
    }

    return state;
}

// ImgTechnology Component
export const ImgTechnology = ({ className }) => {
    return (
        <div
            className={`w-[1440px] h-[1920px] bg-[url(https://c.animaapp.com/xP4Dad95/img/unsplash-rvcxgbt80j8.png)] bg-cover bg-[50%_50%] ${className}`}
        />
    );
};

// ImgAvatarWrapper Component
export const ImgAvatarWrapper = ({ className }) => {
    return (
        <div
            className={`w-[1920px] h-[1920px] bg-[url(https://c.animaapp.com/xP4Dad95/img/unsplash-kq8dgns1llk.png)] bg-cover bg-[50%_50%] rounded-lg ${className}`}
        />
    );
};

// ImgCar Component
export const ImgCar = ({ className }) => {
    return (
        <div
            className={`w-[1536px] h-[1920px] bg-[url(https://c.animaapp.com/xP4Dad95/img/unsplash-xpcuyaztpli.png)] bg-cover bg-[50%_50%] ${className}`}
        />
    );
};

// DivWrapper Component
export const DivWrapper = ({ className }) => {
    return (
        <div
            className={`w-[1920px] h-[1920px] bg-[url(https://c.animaapp.com/xP4Dad95/img/unsplash-0wrxaxqip58.png)] bg-cover bg-[50%_50%] rounded-lg ${className}`}
        />
    );
};

// ImgFood Component
export const ImgFood = ({ className }) => {
    return (
        <div
            className={`w-[1920px] h-[1280px] bg-[url(https://c.animaapp.com/xP4Dad95/img/unsplash-r01zoptiev8.png)] bg-cover bg-[50%_50%] ${className}`}
        />
    );
};

// ImgAvatar10 Component
export const ImgAvatar10 = ({ className }) => {
    return (
        <div
            className={`w-[1920px] h-[1920px] bg-[url(https://c.animaapp.com/xP4Dad95/img/unsplash-l2dtmhqzx4q.png)] bg-cover bg-[50%_50%] rounded-lg ${className}`}
        />
    );
};

// TitleSection Component
export const TitleSection = ({ style, className, text = "New Posts" }) => {
    return (
        <div className={`inline-flex items-center gap-1.5 relative ${className}`}>
            <div className="relative w-1 h-2.5 bg-primary rounded-xl" />
            <div className="relative w-fit mt-[-1.00px] font-h4 font-[number:var(--h4-font-weight)] text-black text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] whitespace-nowrap [font-style:var(--h4-font-style)]">
                {text}
            </div>
        </div>
    );
};

// Arrow Component
export const Arrow = ({
    background = true,
    strocke = false,
    direction,
    status,
    size,
    action,
    className,
}) => {
    const [state, dispatch] = useReducer(arrowReducer, {
        direction: direction || "right",
        status: status || "enabled",
        size: size || "small",
        action: action || "none",
    });

    return (
        <div
            className={`w-10 h-10 rounded-xl bg-gray ${className}`}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
        >
            <IconFree
                className="!left-2 !top-2"
                iconClassName={
                    state.action === "hover"
                        ? "!text-primary ![font-family:'Font_Awesome_6_Free-Solid',Helvetica]"
                        : state.direction === "left"
                            ? "!text-black-50 ![font-family:'Font_Awesome_6_Free-Solid',Helvetica]"
                            : "!text-black ![font-family:'Font_Awesome_6_Free-Solid',Helvetica]"
                }
                iconName={state.direction === "left" ? "" : ""}
                padding="roomy"
                scale="one-x"
                style="regular"
            />
        </div>
    );
};

function arrowReducer(state, action) {
    switch (action) {
        case "mouse_enter":
            return {
                ...state,
                action: "hover",
            };

        case "mouse_leave":
            return {
                ...state,
                action: "none",
            };
    }

    return state;
}

// ImgSportWrapper Component
export const ImgSportWrapper = ({ className }) => {
    return (
        <div
            className={`w-[1920px] h-[1280px] bg-[url(https://c.animaapp.com/xP4Dad95/img/unsplash-nrn5rvl89lo.png)] bg-cover bg-[50%_50%] ${className}`}
        />
    );
};

// PostCards Component
export const PostCards = ({
    design,
    size,
    explanation,
    info,
    className,
    override = (
        <ImgSportWrapper className="!self-stretch !h-[unset] !bg-[unset] !flex-1 !relative !bg-[unset] !bg-[unset] !grow !w-full" />
    ),
    text = "Title",
    text1 = "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor",
    text2 = "Header",
    override1 = (
        <ImgAvatar className="!h-11 !bg-[unset] !bg-[unset] !relative !bg-[unset] !w-11" />
    ),
}) => {
    return (
        <div
            className={`flex flex-col w-[360px] h-[389px] items-start p-2.5 relative bg-[#ffffff] rounded-xl overflow-hidden shadow-shadow ${className}`}
        >
            {override}
            <div className="flex flex-col items-start pl-1.5 pr-4 py-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-[328px] h-[19px] mt-[-1.00px] mr-[-10.00px] font-h5 font-[number:var(--h5-font-weight)] text-black text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:0] [-webkit-box-orient:vertical] [font-style:var(--h5-font-style)]">
                    {text}
                </div>
            </div>

            <div className="flex flex-col items-start gap-2 pl-1.5 pr-4 pt-0 pb-4 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative w-[328px] h-10 mt-[-1.00px] mr-[-10.00px] font-paragraph font-[number:var(--paragraph-font-weight)] text-black-75 text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [font-style:var(--paragraph-font-style)]">
                    {text1}
                </p>
            </div>

            <div className="flex h-[72px] items-center justify-center px-4 py-[13px] relative self-stretch w-full bg-gray rounded-xl">
                <div className="flex items-center gap-2.5 relative flex-1 grow">
                    {override1}
                    <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                        <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-black text-sm tracking-[0.10px] leading-[22px]">
                            {text2}
                        </div>

                        <div className="relative w-[210px] [font-family:'Roboto',Helvetica] font-normal text-black-75 text-xs tracking-[0.25px] leading-[18px]">
                            July 14 , 2022
                        </div>
                    </div>
                </div>

                <CardIcon
                    action="hover"
                    className="!flex-[0_0_auto]"
                    size="small"
                    type="simple"
                />
            </div>
        </div>
    );
};
