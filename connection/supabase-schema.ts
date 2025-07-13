export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      brands: {
        Row: {
          deactivatedat: string | null
          description: string | null
          id: number
          name: string | null
        }
        Insert: {
          deactivatedat?: string | null
          description?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          deactivatedat?: string | null
          description?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      cartitems: {
        Row: {
          addedat: string | null
          id: number
          iscancelled: boolean | null
          issold: boolean | null
          product_id: number | null
          quantity: number | null
          user_id: number | null
        }
        Insert: {
          addedat?: string | null
          id?: number
          iscancelled?: boolean | null
          issold?: boolean | null
          product_id?: number | null
          quantity?: number | null
          user_id?: number | null
        }
        Update: {
          addedat?: string | null
          id?: number
          iscancelled?: boolean | null
          issold?: boolean | null
          product_id?: number | null
          quantity?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_cartitems_products"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product_with_image"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_cartitems_products"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_cartitems_users"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          deactivatedat: string | null
          description: string | null
          id: number
          name: string | null
        }
        Insert: {
          deactivatedat?: string | null
          description?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          deactivatedat?: string | null
          description?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      favorites: {
        Row: {
          product_id: number
          user_id: number
        }
        Insert: {
          product_id: number
          user_id: number
        }
        Update: {
          product_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_favorites_products"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product_with_image"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_favorites_products"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_favorites_users"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      images: {
        Row: {
          deactivatedat: string | null
          id: number
          product_id: number | null
          uri: string | null
        }
        Insert: {
          deactivatedat?: string | null
          id?: number
          product_id?: number | null
          uri?: string | null
        }
        Update: {
          deactivatedat?: string | null
          id?: number
          product_id?: number | null
          uri?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_images_products"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product_with_image"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_images_products"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      paymentmethods: {
        Row: {
          alias: string | null
          cbu: string | null
          id: number
          mercadotoken: string | null
        }
        Insert: {
          alias?: string | null
          cbu?: string | null
          id?: number
          mercadotoken?: string | null
        }
        Update: {
          alias?: string | null
          cbu?: string | null
          id?: number
          mercadotoken?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          availablestock: number
          brand_id: number | null
          category_id: number | null
          deactivatedat: string | null
          description: string | null
          discount: number | null
          id: number
          isfeatured: boolean | null
          name: string | null
          price: number | null
          reservedstock: number
        }
        Insert: {
          availablestock?: number
          brand_id?: number | null
          category_id?: number | null
          deactivatedat?: string | null
          description?: string | null
          discount?: number | null
          id?: number
          isfeatured?: boolean | null
          name?: string | null
          price?: number | null
          reservedstock?: number
        }
        Update: {
          availablestock?: number
          brand_id?: number | null
          category_id?: number | null
          deactivatedat?: string | null
          description?: string | null
          discount?: number | null
          id?: number
          isfeatured?: boolean | null
          name?: string | null
          price?: number | null
          reservedstock?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_products_brands"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_products_categories"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      saleitems: {
        Row: {
          product_id: number
          quantity: number | null
          sale_id: number
          unitprice: number | null
        }
        Insert: {
          product_id: number
          quantity?: number | null
          sale_id: number
          unitprice?: number | null
        }
        Update: {
          product_id?: number
          quantity?: number | null
          sale_id?: number
          unitprice?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_saleitems_products"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product_with_image"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_saleitems_products"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_saleitems_sales"
            columns: ["sale_id"]
            isOneToOne: false
            referencedRelation: "sales"
            referencedColumns: ["id"]
          },
        ]
      }
      sales: {
        Row: {
          id: number
          saledate: string | null
          status: number | null
          totalamount: number | null
          user_id: number | null
        }
        Insert: {
          id?: number
          saledate?: string | null
          status?: number | null
          totalamount?: number | null
          user_id?: number | null
        }
        Update: {
          id?: number
          saledate?: string | null
          status?: number | null
          totalamount?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_sales_users"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      shipments: {
        Row: {
          id: number
          sale_id: number | null
          shippingstatus_id: number | null
        }
        Insert: {
          id?: number
          sale_id?: number | null
          shippingstatus_id?: number | null
        }
        Update: {
          id?: number
          sale_id?: number | null
          shippingstatus_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_shipments_sales"
            columns: ["sale_id"]
            isOneToOne: false
            referencedRelation: "sales"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_shipments_shippingstatus"
            columns: ["shippingstatus_id"]
            isOneToOne: false
            referencedRelation: "shippingstatuses"
            referencedColumns: ["id"]
          },
        ]
      }
      shippingstatuses: {
        Row: {
          deactivatedat: string | null
          description: string | null
          id: number
        }
        Insert: {
          deactivatedat?: string | null
          description?: string | null
          id?: number
        }
        Update: {
          deactivatedat?: string | null
          description?: string | null
          id?: number
        }
        Relationships: []
      }
      users: {
        Row: {
          address: string | null
          createdat: string
          deactivatedat: string | null
          email: string
          firstname: string | null
          id: number
          lastname: string | null
          password: string
          permissions: number
          phone: string | null
          resettoken: string | null
          resettokenexpiry: string | null
        }
        Insert: {
          address?: string | null
          createdat?: string
          deactivatedat?: string | null
          email: string
          firstname?: string | null
          id?: number
          lastname?: string | null
          password: string
          permissions: number
          phone?: string | null
          resettoken?: string | null
          resettokenexpiry?: string | null
        }
        Update: {
          address?: string | null
          createdat?: string
          deactivatedat?: string | null
          email?: string
          firstname?: string | null
          id?: number
          lastname?: string | null
          password?: string
          permissions?: number
          phone?: string | null
          resettoken?: string | null
          resettokenexpiry?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      product_with_image: {
        Row: {
          availablestock: number | null
          description: string | null
          id: number | null
          image: string | null
          isfeatured: boolean | null
          name: string | null
          price: number | null
        }
        Insert: {
          availablestock?: number | null
          description?: string | null
          id?: number | null
          image?: never
          isfeatured?: boolean | null
          name?: string | null
          price?: number | null
        }
        Update: {
          availablestock?: number | null
          description?: string | null
          id?: number | null
          image?: never
          isfeatured?: boolean | null
          name?: string | null
          price?: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const
