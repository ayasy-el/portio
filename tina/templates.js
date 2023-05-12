export function about_templateFields() {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "enable",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "subtitle",
      label: "subtitle",
    },
    {
      type: "string",
      name: "title2",
      label: "title2",
    },
    {
      type: "string",
      name: "content",
      label: "content",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "button1Name",
      label: "button1Name",
    },
    {
      type: "string",
      name: "button2Name",
      label: "button2Name",
    },
    {
      type: "string",
      name: "button1Target",
      label: "button1Target",
    },
    {
      type: "string",
      name: "button2Target",
      label: "button2Target",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
  ];
}
export function blog_templateFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "featureImage",
      label: "featureImage",
    },
    {
      type: "image",
      name: "postImage",
      label: "postImage",
    },
  ];
}
export function config_templateFields() {
  return [
    {
      type: "string",
      name: "baseURL",
      label: "baseURL",
    },
    {
      type: "string",
      name: "languageCode",
      label: "languageCode",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "theme",
      label: "theme",
    },
    {
      type: "number",
      name: "paginate",
      label: "paginate",
    },
    {
      type: "object",
      name: "params",
      label: "params",
      fields: [
        {
          type: "string",
          name: "blogPageURL",
          label: "blogPageURL",
        },
        {
          type: "image",
          name: "logo",
          label: "logo",
        },
        {
          type: "image",
          name: "footerLogo",
          label: "footerLogo",
        },
        {
          type: "string",
          name: "contactLink",
          label: "contactLink",
        },
        {
          type: "string",
          name: "copyright",
          label: "copyright",
        },
        {
          type: "string",
          name: "googleAnalytics",
          label: "googleAnalytics",
        },
        {
          type: "string",
          name: "formspreeURL",
          label: "formspreeURL",
        },
        {
          type: "object",
          name: "address",
          label: "address",
          fields: [
            {
              type: "string",
              name: "phone",
              label: "phone",
            },
            {
              type: "string",
              name: "email",
              label: "email",
            },
            {
              type: "string",
              name: "address",
              label: "address",
            },
            {
              type: "string",
              name: "openingHours",
              label: "openingHours",
            },
          ],
        },
        {
          type: "object",
          name: "map",
          label: "map",
          fields: [
            {
              type: "string",
              name: "APIkey",
              label: "APIkey",
            },
            {
              type: "string",
              name: "latitude",
              label: "latitude",
            },
            {
              type: "string",
              name: "longitude",
              label: "longitude",
            },
            {
              type: "image",
              name: "pinImage",
              label: "pinImage",
            },
          ],
        },
      ],
    },
  ];
}
export function hero_templateFields() {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "enable",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "subtitle",
      label: "subtitle",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "buttonName",
      label: "buttonName",
    },
    {
      type: "string",
      name: "buttonURL",
      label: "buttonURL",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "image",
      name: "videoThumb",
      label: "videoThumb",
    },
    {
      type: "string",
      name: "videoURL",
      label: "videoURL",
    },
  ];
}
export function portfolio_templateFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "thumbnail",
      label: "thumbnail",
    },
    {
      type: "string",
      name: "type",
      label: "type",
    },
    {
      type: "string",
      name: "service",
      label: "service",
    },
    {
      type: "string",
      name: "client",
      label: "client",
    },
    {
      type: "string",
      name: "shortDescription",
      label: "shortDescription",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "challenge",
      label: "challenge",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "solution",
      label: "solution",
      ui: {
        component: "textarea",
      },
    },
  ];
}
export function resume_templateFields() {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "enable",
    },
    {
      type: "string",
      name: "topTitle",
      label: "topTitle",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "subtitle",
      label: "subtitle",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "subsubtitle",
      label: "subsubtitle",
    },
    {
      type: "string",
      name: "tab1Name",
      label: "tab1Name",
    },
    {
      type: "string",
      name: "tab2Name",
      label: "tab2Name",
    },
    {
      type: "string",
      name: "tab1Target",
      label: "tab1Target",
    },
    {
      type: "string",
      name: "tab2Target",
      label: "tab2Target",
    },
    {
      type: "object",
      name: "education",
      label: "education",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "string",
          name: "content",
          label: "content",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "time",
          label: "time",
        },
      ],
    },
    {
      type: "object",
      name: "experience",
      label: "experience",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "string",
          name: "content",
          label: "content",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "time",
          label: "time",
        },
      ],
    },
  ];
}
export function service_templateFields() {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "enable",
    },
    {
      type: "string",
      name: "topTitle",
      label: "topTitle",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "subtitle",
      label: "subtitle",
    },
    {
      type: "object",
      name: "service",
      label: "service",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "string",
          name: "content",
          label: "content",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "image",
          label: "Icon",
        },
      ],
    },
  ];
}
