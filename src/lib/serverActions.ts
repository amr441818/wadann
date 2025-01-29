"use server"

import apiServiceCall from "@/utils/api/shared/apiServiceCall"

export const getHomeHeaderData = async () => {
    return apiServiceCall({ url: "slider" })
}
export const getHomeAchievementData = async () => {
    return apiServiceCall({ url: "achievement" })
}
export const getHomeEventsData = async () => {
    return apiServiceCall({ url: "event" })
}
export const getHomeTeamData = async () => {
    return apiServiceCall({ url: "meet_our_teams" })
}
export const getHomeWhoWeAreData = async () => {
    return apiServiceCall({ url: "whoweare" })
}
export const getHomePropertyBannerData = async () => {
    return apiServiceCall({ url: "property" })
}
export const getHomePartnerBannerData = async () => {
    return apiServiceCall({ url: "partner" })
}

export const getBlogs = async () => {
    return apiServiceCall({ url: "blog" })
}

export const getBlog = async (id: string) => {
    return apiServiceCall({ url: `blog/${id}` })
}
export const getContactUs = async () => {
    return apiServiceCall({ url: `setting/social` })
}

export const getDevelopers = async () => {
    return apiServiceCall({ url: "developer" })
}

export const getDeveloper = async (id: string) => {
    return apiServiceCall({ url: `developer/${id}` })
}

export const getTerms = async () => {
    return apiServiceCall({ url: `setting/terms` })
}

export const getPrivacy = async () => {
    return apiServiceCall({ url: `setting/privacy` })
}

export const getHomePropertyDiscoverData = async () => {
    return apiServiceCall({ url: "discover" })
}

export const getAboutUs = async () => {
    return apiServiceCall({ url: "aboutushome" })
}

export const getHomeTopAreasData = async () => {
    return apiServiceCall({ url: "area/highlighted_areas" })
}
export const getHomeWhyChooseUsData = async () => {
    return apiServiceCall({ url: "whychooseus" })
}
export const getHomeDeveloperData = async () => {
    return apiServiceCall({ url: "developer" })
}
export const getHomeTopPalanProperyData = async () => {
    return apiServiceCall({ url: "product" })
}
export const getSpacificProperyData = async (slug: string) => {
    return apiServiceCall({ url: `product/${slug}` })
}
