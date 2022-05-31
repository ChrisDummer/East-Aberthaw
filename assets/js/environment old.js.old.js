var APP_DATA = {
  scenes: [
    {
      id: "0-exhibition-room",
      name: "Exhibition Room",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        }
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.2,
          pitch: -0.2,
          rotation: 0,
          target: "1-stall-examples",
          classes: "is-new",
          lookat: { pitch: 0, yaw: 1.4 },
        },
      ],
      infoHotspots: [
        {
          yaw: -0.2,
          pitch: 0.2,
          title: "Lorem ipsum",
          text: "This is just a simple informational hot spot. There is no modal.",
          classes: "is-new"
        }
      ],
      overlays: [
        {
          yaw: -0.95,
          pitch: 0.07,
          distance: "900",
          extraTransforms: "",
          id: "overlay-character",
          width:"600px",
          height:"400px"
        },
        {
          yaw: 1.6,
          pitch: 0.25,
          distance: "1960",
          extraTransforms: "",
          id: "overlay-pikachu",
          width:"600px",
          height:"400px"
        },
        {
          yaw: -1.6,
          pitch: 0.25,
          distance: "1400",
          extraTransforms: "",
          id: "overlay-charmander",
          width:"600px",
          height:"400px"
        }
      ],
      modalHotspots: [
        {
          yaw: 0,
          pitch: -0.2,
          target: "#modal-board-1",
          title: "Example PDF",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel lorem a augue tristique semper.",
          number: "1",
          type: "hotspot",
          modal_group: "modal-boards",
          classes: "is-new"
        },
        {
          yaw: 0,
          pitch: 0,
          target: "#modal-board-2",
          title: "Example PDF 2",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel lorem a augue tristique semper.",
          number: "2",
          type: "hotspot",
          modal_group: "modal-boards",
        },
        {
          yaw: 0,
          pitch: 0.2,
          target: "#modal-board-3",
          title: "Example PDF 3",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel lorem a augue tristique semper.",
          number: "3",
          type: "hotspot",
          modal_group: "modal-boards",
        },
        {
          yaw: -0.6,
          pitch: 0,
          target: "#modal-downloads-1",
          title: "Downloads and Literature",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel lorem a augue tristique semper.",
          type: "download",
          modal_group: "modal-info",
        },
        {
          yaw: -0.6,
          pitch: 0.2,
          target: "#modal-downloads-2",
          title: "Downloads and Literature 2",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel lorem a augue tristique semper.",
          type: "download",
          modal_group: "modal-info",
        },
        {
          yaw: -0.4,
          pitch: 0,
          target: "javascript:toggleSidebar('open','sidebar-feedback');",
          title: "Feedback Form",
          description: "Please let us know your thoughts on this proposal",
          type: "form",
          is_modal: false,
        },
        {
          yaw: -0.2,
          pitch: 0,
          target: "#modal-contact",
          title: "Contact Us",
          description: "Get in touch with the project team",
          type: "chat",
          modal_group: "modal-info",
        },
        {
          yaw: -0.8,
          pitch: 0,
          target: "#modal-faqs-1",
          title: "FAQ",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          type: "question",
          modal_group: "modal-info",
        },
        {
          yaw: -0.8,
          pitch: 0.2,
          target: "#modal-faqs-2",
          title: "FAQ 2",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          type: "question",
          modal_group: "modal-info",
        },
        {
          yaw: 0.6,
          pitch: 0,
          target: "#modal-compare-1",
          title: "Steven Seagal and Nicholas Cage",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel lorem a augue tristique semper.",
          type: "before-after",
          modal_group: "modal-media",
        },
        {
          yaw: 0.6,
          pitch: 0.2,
          target: "#modal-compare-2",
          title: "Bear vs Kitten",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel lorem a augue tristique semper.",
          type: "before-after",
          modal_group: "modal-media",
        },
        {
          yaw: 0.2,
          pitch: -0.2,
          target: "#modal-gallery-1",
          title: "Photo Gallery",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel lorem a augue tristique semper.",
          type: "image",
          modal_group: "modal-media",
        },
        {
          yaw: 0.2,
          pitch: -0.4,
          target: "#modal-gallery-2",
          title: "Photo Gallery 2",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel lorem a augue tristique semper.",
          type: "image",
          modal_group: "modal-media",
        },
        {
          yaw: 0.2,
          pitch: 0,
          target: "#modal-image-1",
          title: "Image Example",
          type: "image",
          modal_group: "modal-media",
        },
        {
          yaw: 0.2,
          pitch: 0.2,
          target: "#modal-image-2",
          title: "Image Example 2",
          type: "image",
          modal_group: "modal-media",
        },
        {
          yaw: 0.4,
          pitch: 0,
          target: "#modal-video-1",
          title: "Youtube Example",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          type: "video",
          modal_group: "modal-media",
        },
        {
          yaw: 0.4,
          pitch: 0.2,
          target: "#modal-video-2",
          title: "Vimeo Example",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          type: "video",
          modal_group: "modal-media",
        },
        {
          yaw: -0.6,
          pitch: -0.2,
          target: "#modal-map-1",
          title: "Embedded Google Map",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          type: "marker",
          modal_group: "modal-info",
        },
        {
          yaw: -0.4,
          pitch: 0.2,
          title: "Timeline",
          description: "View the project timeline",
          target: "#modal-timeline",
          type: "timeline",
          modal_group: "modal-info",
        },
        {
          yaw: -0.4,
          pitch: -0.2,
          title: "Events",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          target: "#modal-events-1",
          type: "calendar",
          modal_group: "modal-info",
        }
      ],
    },
    {
      id: "1-stall-examples",
      name: "Stall Examples",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        }
      ],
      faceSize: 1500,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [],
      overlays: [],
      modalHotspots: [
        {
          yaw: 0,
          pitch: -0.2,
          target: "#modal-board-4",
          title: "Example PDF",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel lorem a augue tristique semper.",
          number: "4",
          type: "hotspot",
          modal_group: "modal-scene2-boards",
          classes: "is-new"
        },
        {
          yaw: 0,
          pitch: 0,
          target: "#modal-board-5",
          title: "Example PDF 2",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel lorem a augue tristique semper.",
          number: "5",
          type: "hotspot",
          modal_group: "modal-scene2-boards",
        },
        {
          yaw: 0,
          pitch: 0.2,
          target: "#modal-board-6",
          title: "Example PDF 3",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel lorem a augue tristique semper.",
          number: "6",
          type: "hotspot",
          modal_group: "modal-scene2-boards",
        },
      ],
      infoHotspots: []
    }
  ],
  name: "EPLS Virtual Consultation Boilerplate",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: false,
    fullscreenButton: true,
    viewControlButtons: true,
    restrictPitch: false,
    numberAsIcon: false
  }
};
