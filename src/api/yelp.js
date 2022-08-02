import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer aO8uypD7NIxWsQkYuKNzYsj5vZcY-R0cy5p4rNGrfsuCQz0skFRdtJtO0i8ya3sA3MLTKE4ArScbK2108VOA85MaGuW0c814XDtYsEJwetrGu1eRAhQxK5hcCC1VYnYx",
  },
});
