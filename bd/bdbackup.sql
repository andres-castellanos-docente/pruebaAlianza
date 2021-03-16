--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

-- Started on 2021-03-16 17:55:36 -05

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3268 (class 1262 OID 18829)
-- Name: prueba; Type: DATABASE; Schema: -; Owner: usrprueba
--

CREATE DATABASE prueba WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';


ALTER DATABASE prueba OWNER TO usrprueba;

\connect prueba

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 201 (class 1259 OID 18931)
-- Name: clients; Type: TABLE; Schema: public; Owner: usrprueba
--

CREATE TABLE public.clients (
    id bigint NOT NULL,
    name character varying(100) NOT NULL,
    phone character varying(20) NOT NULL,
    email character varying(100) NOT NULL,
    sharedkey character varying(100) NOT NULL,
    startdate date NOT NULL,
    enddate date NOT NULL,
    savedate date DEFAULT CURRENT_DATE NOT NULL
);


ALTER TABLE public.clients OWNER TO usrprueba;

--
-- TOC entry 200 (class 1259 OID 18929)
-- Name: clients_id_seq; Type: SEQUENCE; Schema: public; Owner: usrprueba
--

CREATE SEQUENCE public.clients_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.clients_id_seq OWNER TO usrprueba;

--
-- TOC entry 3269 (class 0 OID 0)
-- Dependencies: 200
-- Name: clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: usrprueba
--

ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;


--
-- TOC entry 203 (class 1259 OID 18941)
-- Name: usuariosrest; Type: TABLE; Schema: public; Owner: usrprueba
--

CREATE TABLE public.usuariosrest (
    id bigint NOT NULL,
    activo boolean,
    email character varying(255),
    password character varying(255),
    username character varying(255)
);


ALTER TABLE public.usuariosrest OWNER TO usrprueba;

--
-- TOC entry 202 (class 1259 OID 18939)
-- Name: usuariosrest_id_seq; Type: SEQUENCE; Schema: public; Owner: usrprueba
--

CREATE SEQUENCE public.usuariosrest_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuariosrest_id_seq OWNER TO usrprueba;

--
-- TOC entry 3270 (class 0 OID 0)
-- Dependencies: 202
-- Name: usuariosrest_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: usrprueba
--

ALTER SEQUENCE public.usuariosrest_id_seq OWNED BY public.usuariosrest.id;


--
-- TOC entry 3122 (class 2604 OID 18934)
-- Name: clients id; Type: DEFAULT; Schema: public; Owner: usrprueba
--

ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);


--
-- TOC entry 3124 (class 2604 OID 18944)
-- Name: usuariosrest id; Type: DEFAULT; Schema: public; Owner: usrprueba
--

ALTER TABLE ONLY public.usuariosrest ALTER COLUMN id SET DEFAULT nextval('public.usuariosrest_id_seq'::regclass);


--
-- TOC entry 3260 (class 0 OID 18931)
-- Dependencies: 201
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: usrprueba
--



--
-- TOC entry 3262 (class 0 OID 18941)
-- Dependencies: 203
-- Data for Name: usuariosrest; Type: TABLE DATA; Schema: public; Owner: usrprueba
--

INSERT INTO public.usuariosrest (id, activo, email, password, username) VALUES (1, true, NULL, '$2a$10$1dCKuQoQqbBNCK.Rb8XQSemwqdHdVAcCTb1kUQLg2key/4VX./TvS', 'prueba');


--
-- TOC entry 3271 (class 0 OID 0)
-- Dependencies: 200
-- Name: clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: usrprueba
--

SELECT pg_catalog.setval('public.clients_id_seq', 1, true);


--
-- TOC entry 3272 (class 0 OID 0)
-- Dependencies: 202
-- Name: usuariosrest_id_seq; Type: SEQUENCE SET; Schema: public; Owner: usrprueba
--

SELECT pg_catalog.setval('public.usuariosrest_id_seq', 1, true);


--
-- TOC entry 3126 (class 2606 OID 18937)
-- Name: clients clients_pkey; Type: CONSTRAINT; Schema: public; Owner: usrprueba
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);


--
-- TOC entry 3128 (class 2606 OID 18949)
-- Name: usuariosrest usuariosrest_pkey; Type: CONSTRAINT; Schema: public; Owner: usrprueba
--

ALTER TABLE ONLY public.usuariosrest
    ADD CONSTRAINT usuariosrest_pkey PRIMARY KEY (id);


-- Completed on 2021-03-16 17:55:36 -05

--
-- PostgreSQL database dump complete
--

