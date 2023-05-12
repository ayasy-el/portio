import { defineConfig } from "tinacms";
import { about_templateFields } from "./templates";
import { blog_templateFields } from "./templates";
import { config_templateFields } from "./templates";
import { hero_templateFields } from "./templates";
import { portfolio_templateFields } from "./templates";
import { resume_templateFields } from "./templates";
import { service_templateFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "40eee0e1-478d-4760-993a-a8c5d48a87aa", // Get this from tina.io
  token: "452826d19d82adb738f115b3c1cc898ca14c1629", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "yml",
        label: "Hero",
        name: "hero",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "hero",
        },
        fields: [
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
        ],
      },
      {
        format: "yml",
        label: "About",
        name: "about",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "aboutSection",
        },
        fields: [
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
        ],
      },
      {
        format: "yml",
        label: "Services",
        name: "services",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "serviceSection",
        },
        fields: [
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
        ],
      },
      {
        format: "yml",
        label: "Resume",
        name: "resume",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "resumeSection",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "yml",
        label: "Skills",
        name: "skills",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "skillSection",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "yml",
        label: "Testimonials",
        name: "testimonials",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "testimonialSection",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "yml",
        label: "Blog Section",
        name: "blog_section",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "blogSection",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "md",
        label: "Portfolio",
        name: "portfolio",
        path: "content/portfolio",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...portfolio_templateFields(),
        ],
      },
      {
        format: "md",
        label: "Contact",
        name: "contact",
        path: "content/contact",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Blog",
        name: "blog",
        path: "content/blog",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...blog_templateFields(),
        ],
      },
      {
        format: "toml",
        label: "Config File",
        name: "config_file",
        path: "/",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "config",
        },
        fields: [
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
        ],
      },
    ],
  },
});
