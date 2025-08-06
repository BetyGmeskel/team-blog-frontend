import React from "react";
import {
    Arrow,
    DivWrapper,
    ImgAvatar10,
    ImgAvatarWrapper,
    ImgCar,
    ImgFood,
    ImgSport,
    ImgTechnology,
    PostCards,
    TitleSection
} from "../../components/AllComponents";

export const Box = () => {
    return (
        <div className="w-full max-w-full px-4 py-8">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <TitleSection
                    className="!flex-[0_0_auto]"
                    style="default"
                    text="Related Posts"
                />
                <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
                    <Arrow
                        action="none"
                        className="!relative"
                        direction="left"
                        size="small"
                        status="disabled"
                    />
                    <Arrow
                        action="none"
                        className="!relative"
                        direction="right"
                        size="small"
                        status="enabled"
                    />
                </div>
            </div>

            {/* Horizontal Scrollable Container */}
            <div className="relative w-full">
                <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
                    <div className="flex-shrink-0 w-[360px] sm:w-[320px] md:w-[360px]">
                        <PostCards
                            design="one"
                            explanation="active"
                            info="active"
                            override={
                                <ImgSport className="!self-stretch !h-[unset] !bg-[unset] !flex-1 !relative !bg-[unset] !bg-[unset] !grow !w-full" />
                            }
                            size="small"
                            text="House Boating On Lake Shasta"
                            text1="The Best Way To Spend A Long 4th Of July Weekend. Wake Boarding, Swimming, Barbecues, And Bonfires."
                            text2="James"
                        />
                    </div>

                    <div className="flex-shrink-0 w-[360px] sm:w-[320px] md:w-[360px]">
                        <PostCards
                            design="one"
                            explanation="active"
                            info="active"
                            override={
                                <ImgTechnology className="!self-stretch !h-[unset] !bg-[unset] !flex-1 !relative !bg-[unset] !bg-[unset] !grow !w-full" />
                            }
                            override1={
                                <ImgAvatarWrapper className="!h-11 !bg-[unset] !bg-[unset] !relative !bg-[unset] !w-11" />
                            }
                            size="small"
                            text="How To Choose The Right Laptop For Programming"
                            text1="Choosing The Right Laptop For Programming Can Be A Tough Process. It's Easy To Get Confused While Researching The Various Options. There Are Many Different Laptop Models Out There, Each With A Different Set Of Trade-offs"
                            text2="Robert"
                        />
                    </div>

                    <div className="flex-shrink-0 w-[360px] sm:w-[320px] md:w-[360px]">
                        <PostCards
                            design="one"
                            explanation="active"
                            info="active"
                            override={
                                <ImgCar className="!self-stretch !h-[unset] !bg-[unset] !flex-1 !relative !bg-[unset] !bg-[unset] !grow !w-full" />
                            }
                            override1={
                                <DivWrapper className="!h-11 !bg-[unset] !bg-[unset] !relative !bg-[unset] !w-11" />
                            }
                            size="small"
                            text="Why Buying A New Car Makes More Sense Than Buying Used"
                            text1="Many Experts Will Tell You Buying Cars Used Is Best For Your Long-term Financial Health. Here's Why They're (mostly) Wrong"
                            text2="Mary"
                        />
                    </div>

                    <div className="flex-shrink-0 w-[360px] sm:w-[320px] md:w-[360px]">
                        <PostCards
                            design="one"
                            explanation="active"
                            info="active"
                            override={
                                <ImgFood className="!self-stretch !h-[unset] !bg-[unset] !flex-1 !relative !bg-[unset] !bg-[unset] !grow !w-full" />
                            }
                            override1={
                                <ImgAvatar10 className="!h-11 !bg-[unset] !bg-[unset] !relative !bg-[unset] !w-11" />
                            }
                            size="small"
                            text="Lasagna Is But A Pasta Cake"
                            text1="Re-envision The Description Of A Common Food From A Different Perspective — It Is … Pasta Cake Layered With Cheese, Meat, Pasta Repeated, Bake And Serve."
                            text2="Jon Kantner"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
