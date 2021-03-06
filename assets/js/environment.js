var APP_DATA = {
  scenes: [
    {
      "id": "0-lowcarbon",
      "name": "East Aberthaw Consultation",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      linkHotspots: [

      ],
      infoHotspots: [
      ],
      overlays: [

      ],
      modalHotspots: [
        {
          "yaw": 0.825402388014437,
          "pitch": -0.2517298344046903,
          target: "#modal-board-1",
          title: "Project Overview",
          description: "Oaklands Farm Solar Limited is in the early development stages of a large-scale solar plus energy storage project in South Derbyshire, on land west of the village of Rosliston, and east of Walton on Trent.",
          number: "1",
          type: "hotspot",
          modal_group: "modal-boards",
          classes: "is-new"
        },
        {
          "yaw": 1.6117354368082522,
          "pitch": -0.23837988273877464,
          target: "#modal-board-2",
          title: "Site Selection and context",
          description: "When siting a solar farm we look for a large area of suitable land with good solar irradiation in close proximity to a grid connection point.",
          number: "2",
          type: "hotspot",
          modal_group: "modal-boards",
        },
        {
          "yaw": 2.346881021119227,
          "pitch": -0.2059893070872434,
          target: "#modal-board-3",
          title: "The EIA Process",
          description: "A full Environmental Impact Assessment (EIA) is being carried out to identify and assess the likely or potential environmental effects of building this project.",
          number: "3",
          type: "hotspot",
          modal_group: "modal-boards",
        },
        {
          "yaw": 2.692070270654474,
          "pitch": -0.18940237750891065,
          target: "#modal-board-4",
          number: "4",
          title: "Ecology",
          description: "We have undertaken an assessment of the potential ecological effects and proposed mitigation measures required to address any impacts of our proposals on the local environment.",
          type: "hotspot",
          modal_group: "modal-boards",
        },
        {
          "yaw": -2.5868320781290173,
          "pitch": -0.25552913626032137,
          target: "#modal-board-5",
          number: "5",
          title: "Noise and Vibration",
          description: "Solar farms are very quiet energy generating facilities. They have very few moving parts and as such require less ongoing maintenance and generate little noise or vibration.",
          type: "hotspot",
          modal_group: "modal-boards",
        },
        {
          yaw: -2.297108577545133,
          "pitch": -0.2453331166272914,
          target: "#modal-board-6",
          number: "6",
          title: "Glint and glare",
          description: "We have undertaken a Glint and Glare Assessment, which has reviewed the potential for glint and glare on the surrounding area, including potential effects on surrounding roads, houses, footpaths and bridleways.",
          type: "hotspot",

          modal_group: "modal-boards",
        },
        {
          "yaw": -1.5675941920450391,
          "pitch": -0.19871992805941296,
          target: "#modal-board-7",
          number: "7",
          title: "Construction",
          description: "We have undertaken a construction assessment, which has reviewed the potential for construction on the surrounding area, including potential effects on surrounding roads, houses, footpaths and bridleways.",
          type: "hotspot",
          modal_group: "modal-boards",
        },
        {
          "yaw": -0.7686702265518317,
          "pitch": -0.2684108855692422,
          target: "#modal-board-8",
          number: "8",
          title: "Social Considerations",
          description: "This scheme represents an important contribution to meeting the UK???s legally binding target under the Climate Change Act 2008 to achieve a ???net zero??? carbon account by 2050.",
          type: "hotspot",
          modal_group: "modal-boards",
        },
        {
          yaw: 0.11573360032025803,
          pitch: 0.05581244804555574,
          target: "#modal-gallery-1",
          title: "Consultation Plans",
          description: "Plans for this consultation",
          type: "image",
          modal_group: "modal-media",
        },
        {
          yaw: -0.17323608382886135,
          pitch: -0.002254036755310551,
          target: " javascript:window.open('https://www.dropbox.com/sh/6uoaacw0wlt1kk7/AACKueNzbPA4v2Wu_Wox7uwva?dl=0', '_blank');",
          title: " PEIR Download Centre",
          description: "To view the Preliminary Environmental Information Report ",
          type: "download",
          is_modal: false,
        },
        {
          yaw: -0.34820715045094097,
          pitch: -0.13152976094365037,
          target: " javascript:toggleSidebar('open','sidebar-feedback');",
          title: " Feedback Form",
          description: "Please let us know your thoughts on this proposal ",
          type: "chat",
          is_modal: false,
        },
        {
          yaw: 1.3299215652806193,
          pitch: -0.1,
        target: "#modal-downloads-1",
        title: "Downloads and Literature",
        //description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel lorem a augue tristique semper.",
        type: "download",
        modal_group: "modal-info",
      },
      ],
    },

  ],
  name: "Oaklands Consultation",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: false,
    fullscreenButton: true,
    viewControlButtons: true,
    restrictPitch: false,
    numberAsIcon: false
  }
};
