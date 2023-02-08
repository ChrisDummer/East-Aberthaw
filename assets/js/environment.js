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
          title: "Welcome",
          description: "Welcome to our public consultation on East Aberthaw Solar, a new proposed solar farm together with associated equipment, Vale of Glamorgan. ",
          number: "1",
          type: "hotspot",
          modal_group: "modal-boards",
          classes: "is-new"
        },
        {
          "yaw": 1.6117354368082522,
          "pitch": -0.23837988273877464,
          target: "#modal-board-2",
          title: "Site Location",
          description: "East Aberthaw Solar will consist of a ground mounted photovoltaic solar farm with an electrical generating capacity of approximately 35MW, together with associated equipment, infrastructure and / 98 acres in size",
          number: "2",
          type: "hotspot",
          modal_group: "modal-boards",
        },
        {
          "yaw": 2.2418322523378613,
          "pitch": -0.22500225398286133,
          target: "#modal-board-3",
          title: "Site Design Evolution",
          description: "At our Phase 1 informal consultation in June 2022, we presented our initial proposals and thoughts on how the site could be designed based on a preliminary understanding of the environmental constraints and prior to engagement with local residents. This initial design is shown below.",
          number: "3",
          type: "hotspot",
          modal_group: "modal-boards",
        },
        {
          "yaw": 2.600497502812413,
          "pitch": -0.22552325874472068,
          target: "#modal-board-4",
          number: "4",
          title: "Preferred Design",
          description: "This preferred design has been informed by the feedback to our phase 1 information alongside the results of surveys and assessments which have been completed",
          type: "hotspot",
          modal_group: "modal-boards",
        },
        {
          "yaw": 2.972279800927012,
          "pitch": -0.22552325874472068,
          target: "#modal-board-5",
          number: "5",
          title: "Technical assessments",
          description: "We have undertaken a range of technical assessments to help us understand the site and local environment as the solar farm proposals have developed. These assessments will be recorded and form the evidence base we submit as part of the application.",
          type: "hotspot",
          modal_group: "modal-boards",
        },
        {
          yaw: -2.5670080896884286,
          "pitch": -0.3079572177662264,
          target: "#modal-board-6",
          number: "6",
          title: "Landscape and visual assessment",
          description: "We appreciate that for many local residents, what the scheme looks like is a key consideration. To assess the impact of the proposed solar farm on the local area, a Landscape and Visual Assessment (LVA) has been undertaken. This has helped to inform the ‘Preferred Design’ of the site.",
          type: "hotspot",

          modal_group: "modal-boards",
        },
        {
          "yaw": -2.2736511353156423,
          "pitch": -0.3079572177662264,
          target: "#modal-board-7",
          number: "7",
          title: "Frequently asked questions",
          description: "Low Carbon has carfully identified this site as part of a detailed feasibility process to deliver a large-scale clean energy scheme. Many factors are considered by our specialists when evaluating appropriate sites for development.",
          type: "hotspot",
          modal_group: "modal-boards",
        },
        {
          "yaw": -1.691898224562859,
          "pitch": -0.22802025886624833,
          target: "#modal-board-8",
          number: "8",
          title: "Construction, operation and decommissioning",
          description: "The site will continue to be designated as ‘Agricultural Land’ meaning that the inclusion of solar panels for the lifetime of the project will not change Agricultural practices (such as sheep grazing) can continue through the lifetime of the project.",
          type: "hotspot",
          modal_group: "modal-boards",
        },
        {
          "yaw": -1.353931845262732,
          "pitch": -0.22802025886624833,
          target: "#modal-board-9",
          number: "9",
          title: "Community Considerations",
          description: "The Welsh Government has acknowledged that there is a climate emergency and has committed to decarbonisation as a means of tackling the causes of climate change over the coming years. Generating renewable energy is a key part of that commitment and the Welsh Government has set ambitious targets for the generation of renewable energy including for 70% of electricity consumption to be generated from renewable by energy 2030.",
          type: "hotspot",
          modal_group: "modal-boards",
        },
        {
          "yaw": -0.7686702265518317,
          "pitch": -0.2684108855692422,
          target: "#modal-board-10",
          number: "10",
          title: "Consultation process and next steps",
          description: "This project presents a significant opportunity to deliver clean renewable energy. It will offer a valuable contribution to the region’s drive to decarbonise and reduce emissions, as well as helping reduce the UK’s reliance on foreign fuel imports.",
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
