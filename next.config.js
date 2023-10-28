// next.config.js
module.exports = {
    async headers() {
      return [
        {
          source: "/file/cv-adityaade.pdf",
          headers: [
            {
              key: "Content-Disposition",
              value: "attachment; filename=cv-adityaade.pdf",
            },
            {
              key: "Content-Type",
              value: "application/pdf",
            },
          ],
        },
      ];
    },
  };
  