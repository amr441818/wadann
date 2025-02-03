"use server";

import apiServiceCall from "@/utils/api/shared/apiServiceCall";

export const getHomeData = async (locale:string) => {
  return apiServiceCall({ url: "home", headers:{
    "Accept-Language": locale
  } });
};

export const getSettings = async (locale:string) => {
  return apiServiceCall({ url: `settings`, headers:{
    "Accept-Language": locale
  } });
};



export const getBlogs = async (locale:string) => {
  return apiServiceCall({ url: "posts" ,headers:{
    "Accept-Language": locale
  }});
};

export const getBlog = async (id: string, locale: string) => {
  return apiServiceCall({ url: `posts/${id}`,headers:{
    "Accept-Language": locale
  } });
};

  
  export const getProduct = async (id: string) => {
    return apiServiceCall({ url: `products/${id}` });
  };







export const getAboutUs = async () => {
  return apiServiceCall({ url: "aboutushome" });
};








