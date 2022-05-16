function Services() {
    this.fetchData = function () {
      /**
       * Axios trả về đối tượng Promise
       *  - pending (Chờ)
       *  - resolve (thành công)
       *  - reject (thất baị)
       */
      return axios({
        //key: value
        url: "https://6255692652d8738c69217244.mockapi.io/api/DataListTeacher",
        method: "GET",
      });
    };
  }
  